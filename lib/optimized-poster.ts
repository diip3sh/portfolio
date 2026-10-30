import { getImageProps } from "next/image"

// `<video poster>` has no srcset, so resize through the image optimizer here.
// The result is the 2x candidate for `displayWidth`.
export const optimizedPoster = (
  src: string | undefined,
  displayWidth: number
) =>
  src
    ? getImageProps({
        src,
        alt: "",
        width: displayWidth,
        height: displayWidth,
        quality: 95,
      }).props.src
    : undefined
