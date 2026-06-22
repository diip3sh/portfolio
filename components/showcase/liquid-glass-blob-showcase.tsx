"use client"

import * as React from "react";
import { useTheme } from "next-themes";

const glassIconUrl = "/emblem.png";
const lensSize = 180;
const lensOverflow = 72;

type Position = {
  x: number;
  y: number;
};

type GlassMapOptions = {
  width: number;
  height: number;
  radius: number;
  bezelWidth: number;
  glassThickness: number;
  refractiveIndex: number;
};

type DisplacementMap = {
  mapUrl: string;
  maximumDisplacement: number;
};

const clamp = (value: number, minimum: number, maximum: number) =>
  Math.min(Math.max(value, minimum), maximum);

const isSafariBrowser = () => /^((?!chrome|android).)*safari/i.test(window.navigator.userAgent);

const LiquidGlassBlob = () => {
  const { resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const backgroundImageUrl =
    isMounted && resolvedTheme === "light"
      ? "/grid-background-light.png"
      : "/grid-background-dark.png";

  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const sceneRef = React.useRef<HTMLDivElement | null>(null);
  const lensRef = React.useRef<HTMLDivElement | null>(null);
  const filterRef = React.useRef<SVGFilterElement | null>(null);
  const mapImageRef = React.useRef<SVGFEImageElement | null>(null);
  const dragStateRef = React.useRef({
    pointerId: -1,
    pointerX: 0,
    pointerY: 0,
    lensX: 0,
    lensY: 0,
  });
  const positionRef = React.useRef<Position>({ x: 0, y: 0 });
  const sceneSizeRef = React.useRef({ width: 1, height: 1 });
  const frameRef = React.useRef<number | null>(null);
  const pendingPositionRef = React.useRef<Position | null>(null);
  const baseFilterId = React.useId().replaceAll(":", "");
  const filterVersionRef = React.useRef(0);
  const [sceneSize, setSceneSize] = React.useState({ width: 1, height: 1 });
  const [mapUrl, setMapUrl] = React.useState("");
  const [maximumDisplacement, setMaximumDisplacement] = React.useState(0);

  React.useLayoutEffect(() => {
    const displacementMap = createDisplacementMap({
      width: lensSize,
      height: lensSize,
      radius: lensSize / 2,
      bezelWidth: 50,
      glassThickness: 42,
      refractiveIndex: 1.5,
    });

    setMapUrl(displacementMap.mapUrl);
    setMaximumDisplacement(displacementMap.maximumDisplacement);
  }, []);

  const refreshSafariFilter = () => {
    if (!isSafariBrowser()) {
      return;
    }

    const filter = filterRef.current;
    const scene = sceneRef.current;

    if (!filter || !scene) {
      return;
    }

    filterVersionRef.current += 1;
    const nextFilterId = `${baseFilterId}-${filterVersionRef.current}`;
    filter.id = nextFilterId;
    scene.style.filter = `url(#${nextFilterId})`;
  };

  const paintPosition = (position: Position) => {
    const lens = lensRef.current;
    const mapImage = mapImageRef.current;

    if (!lens || !mapImage) {
      return;
    }

    positionRef.current = position;
    lens.style.transform = `translate3d(${position.x}px, ${position.y}px, 0)`;
    mapImage.setAttribute("x", String(position.x / sceneSizeRef.current.width));
    mapImage.setAttribute("y", String(position.y / sceneSizeRef.current.height));
    refreshSafariFilter();
  };

  const updatePosition = (position: Position) => {
    pendingPositionRef.current = position;

    if (frameRef.current !== null) {
      return;
    }

    frameRef.current = window.requestAnimationFrame(() => {
      frameRef.current = null;

      if (pendingPositionRef.current) {
        paintPosition(pendingPositionRef.current);
      }
    });
  };

  React.useLayoutEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const updateSceneSize = () => {
      const { width, height } = container.getBoundingClientRect();
      const nextSize = { width, height };
      const centeredPosition = {
        x: width / 2 - lensSize / 2,
        y: height / 2 - lensSize / 2,
      };

      sceneSizeRef.current = nextSize;
      setSceneSize(nextSize);

      if (positionRef.current.x === 0 && positionRef.current.y === 0) {
        paintPosition(centeredPosition);
        return;
      }

      paintPosition({
        x: clamp(positionRef.current.x, -lensOverflow, width - lensSize + lensOverflow),
        y: clamp(positionRef.current.y, -lensOverflow, height - lensSize + lensOverflow),
      });
    };

    updateSceneSize();

    const resizeObserver = new ResizeObserver(updateSceneSize);
    resizeObserver.observe(container);

    return () => resizeObserver.disconnect();
  }, []);

  React.useEffect(
    () => () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    },
    [],
  );

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    const lens = lensRef.current;

    if (!lens) {
      return;
    }

    dragStateRef.current = {
      pointerId: event.pointerId,
      pointerX: event.clientX,
      pointerY: event.clientY,
      lensX: positionRef.current.x,
      lensY: positionRef.current.y,
    };
    lens.setPointerCapture(event.pointerId);
    lens.style.cursor = "grabbing";
    lens.style.willChange = "transform";
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const dragState = dragStateRef.current;

    if (dragState.pointerId !== event.pointerId) {
      return;
    }

    updatePosition({
      x: clamp(
        dragState.lensX + event.clientX - dragState.pointerX,
        -lensOverflow,
        sceneSize.width - lensSize + lensOverflow,
      ),
      y: clamp(
        dragState.lensY + event.clientY - dragState.pointerY,
        -lensOverflow,
        sceneSize.height - lensSize + lensOverflow,
      ),
    });
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    const lens = lensRef.current;

    if (!lens || dragStateRef.current.pointerId !== event.pointerId) {
      return;
    }

    dragStateRef.current.pointerId = -1;
    lens.releasePointerCapture(event.pointerId);
    lens.style.cursor = "grab";
    lens.style.removeProperty("will-change");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const distance = event.shiftKey ? 24 : 8;
    const movement: Record<string, Position> = {
      ArrowUp: { x: 0, y: -distance },
      ArrowDown: { x: 0, y: distance },
      ArrowLeft: { x: -distance, y: 0 },
      ArrowRight: { x: distance, y: 0 },
    };
    const offset = movement[event.key];

    if (!offset) {
      return;
    }

    event.preventDefault();
    updatePosition({
      x: clamp(
        positionRef.current.x + offset.x,
        -lensOverflow,
        sceneSize.width - lensSize + lensOverflow,
      ),
      y: clamp(
        positionRef.current.y + offset.y,
        -lensOverflow,
        sceneSize.height - lensSize + lensOverflow,
      ),
    });
  };

  const initialFilterId = `${baseFilterId}-0`;

  return (
    <>
      <section
        ref={containerRef}
        aria-label="Interactive Aave glass demonstration"
        className="relative h-[min(15dvh,200px)] min-h-96 w-full overflow-visible"
      >
        <svg aria-hidden="true" className="absolute size-0">
          <defs>
            <filter
              ref={filterRef}
              id={initialFilterId}
              x="0"
              y="0"
              width="1"
              height="1"
              filterUnits="objectBoundingBox"
              primitiveUnits="objectBoundingBox"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodColor="rgb(128 128 128)" floodOpacity="1" result="map-background" />
              <feImage
                ref={mapImageRef}
                href={mapUrl || undefined}
                x={positionRef.current.x / sceneSize.width}
                y={positionRef.current.y / sceneSize.height}
                width={lensSize / sceneSize.width}
                height={lensSize / sceneSize.height}
                preserveAspectRatio="none"
                result="raw-map"
              />
              <feComposite in="raw-map" in2="map-background" operator="over" result="map" />
              <feDisplacementMap
                in="SourceGraphic"
                in2="map"
                scale={maximumDisplacement / Math.min(sceneSize.width, sceneSize.height)}
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
          </defs>
        </svg>

        <div
          ref={sceneRef}
          className="absolute inset-0 overflow-hidden bg-[#f5f2ff]"
          style={{
            backgroundImage: `url("${backgroundImageUrl}")`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            filter: `url(#${initialFilterId})`,
          }}
        >
          <img
            src={glassIconUrl}
            alt=""
            width={976}
            height={933}
            className="pointer-events-none absolute inset-0 h-full w-full object-contain drop-shadow-xl"
          />
        </div>

        <div
          ref={lensRef}
          role="button"
          tabIndex={0}
          aria-label="Drag glass lens"
          className="absolute top-0 left-0 z-10 size-[180px] cursor-grab touch-none rounded-full border border-white/70 bg-white/10 shadow-xl outline-none select-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onKeyDown={handleKeyDown}
        >
          <span className="pointer-events-none absolute inset-px rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),inset_0_-2px_5px_rgba(97,77,180,0.14)]" />
          <span
            className="pointer-events-none absolute inset-0 rounded-full opacity-70"
            style={{
              background:
                "radial-gradient(circle at 28% 18%, rgb(255 255 255 / 0.82), transparent 34%)",
            }}
          />
        </div>
      </section>
    </>
  );
};

export { LiquidGlassBlob };

//INFO: Displacement Map Calculations
const displacementMapCache = new Map<string, DisplacementMap>();

const getSquircleHeight = (distance: number) => {
  const clampedDistance = clamp(distance, 0, 1);
  return Math.pow(1 - Math.pow(1 - clampedDistance, 4), 0.25);
};

const getRefractionDisplacement = (
  normalizedDistance: number,
  glassThickness: number,
  refractiveIndex: number,
) => {
  const delta = 0.001;
  const heightBefore = getSquircleHeight(normalizedDistance - delta);
  const heightAfter = getSquircleHeight(normalizedDistance + delta);
  const derivative = (heightAfter - heightBefore) / (2 * delta);
  const normalLength = Math.hypot(derivative, 1);
  const normalX = -derivative / normalLength;
  const normalY = 1 / normalLength;
  const incidentX = 0;
  const incidentY = -1;
  const indexRatio = 1 / refractiveIndex;
  const incidentDotNormal = -(normalX * incidentX + normalY * incidentY);
  const refractionRoot = 1 - indexRatio * indexRatio * (1 - incidentDotNormal * incidentDotNormal);

  if (refractionRoot <= 0) {
    return 0;
  }

  const refractedX =
    indexRatio * incidentX + (indexRatio * incidentDotNormal - Math.sqrt(refractionRoot)) * normalX;
  const refractedY =
    indexRatio * incidentY + (indexRatio * incidentDotNormal - Math.sqrt(refractionRoot)) * normalY;

  if (Math.abs(refractedY) < 0.0001) {
    return 0;
  }

  return Math.abs((refractedX / refractedY) * glassThickness);
};

const getRoundedRectangleDistance = (
  x: number,
  y: number,
  halfWidth: number,
  halfHeight: number,
  radius: number,
) => {
  const cornerX = Math.max(Math.abs(x) - halfWidth + radius, 0);
  const cornerY = Math.max(Math.abs(y) - halfHeight + radius, 0);
  const outsideDistance = Math.hypot(cornerX, cornerY);
  const insideDistance = Math.min(
    Math.max(Math.abs(x) - halfWidth + radius, Math.abs(y) - halfHeight + radius),
    0,
  );

  return outsideDistance + insideDistance - radius;
};

const createDisplacementMap = ({
    width,
    height,
    radius,
    bezelWidth,
    glassThickness,
    refractiveIndex,
  }: GlassMapOptions): DisplacementMap => {
    const cacheKey = `${width}:${height}:${radius}:${bezelWidth}:${glassThickness}:${refractiveIndex}`;
    const cachedMap = displacementMapCache.get(cacheKey);
  
    if (cachedMap) {
      return cachedMap;
    }
  
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    const canvas = document.createElement("canvas");
    canvas.width = Math.max(1, Math.round(width * pixelRatio));
    canvas.height = Math.max(1, Math.round(height * pixelRatio));
  
    const context = canvas.getContext("2d");
  
    if (!context) {
      return { mapUrl: "", maximumDisplacement: 0 };
    }
  
    const imageData = context.createImageData(canvas.width, canvas.height);
    const halfWidth = canvas.width / 2;
    const halfHeight = canvas.height / 2;
    const scaledRadius = radius * pixelRatio;
    const scaledBezelWidth = clamp(bezelWidth * pixelRatio, 1, Math.min(halfWidth, halfHeight));
    const displacementSamples = Array.from({ length: 128 }, (_, sampleIndex) =>
      getRefractionDisplacement(sampleIndex / 127, glassThickness * pixelRatio, refractiveIndex),
    );
    const maximumDisplacement = Math.max(...displacementSamples, 0.0001);
  
    for (let pixelY = 0; pixelY < canvas.height; pixelY += 1) {
      for (let pixelX = 0; pixelX < canvas.width; pixelX += 1) {
        const centeredX = pixelX + 0.5 - halfWidth;
        const centeredY = pixelY + 0.5 - halfHeight;
        const signedDistance = getRoundedRectangleDistance(
          centeredX,
          centeredY,
          halfWidth,
          halfHeight,
          scaledRadius,
        );
        const insideDistance = Math.max(-signedDistance, 0);
        const normalizedEdgeDistance = clamp(insideDistance / scaledBezelWidth, 0, 1);
        const sampleIndex = Math.round(normalizedEdgeDistance * 127);
        const displacementStrength =
          signedDistance <= 0 && normalizedEdgeDistance < 1
            ? displacementSamples[sampleIndex] / maximumDisplacement
            : 0;
        const directionLength = Math.max(Math.hypot(centeredX, centeredY), 1);
        const horizontalDisplacement = -(centeredX / directionLength) * displacementStrength;
        const verticalDisplacement = -(centeredY / directionLength) * displacementStrength;
        const dataIndex = (pixelY * canvas.width + pixelX) * 4;
  
        imageData.data[dataIndex] = Math.round(128 + horizontalDisplacement * 127);
        imageData.data[dataIndex + 1] = Math.round(128 + verticalDisplacement * 127);
        imageData.data[dataIndex + 2] = 128;
        imageData.data[dataIndex + 3] = signedDistance <= 0 ? 255 : 0;
      }
    }
  
    context.putImageData(imageData, 0, 0);
  
    const displacementMap = {
      mapUrl: canvas.toDataURL("image/png"),
      maximumDisplacement: maximumDisplacement / pixelRatio,
    };
    displacementMapCache.set(cacheKey, displacementMap);
  
    return displacementMap;
  };