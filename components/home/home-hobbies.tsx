import { HomeSection } from "@/components/home/home-section"
import { HoverTextPreview } from "../ui/text-preview"

export const HomeHobbiesSection = () => {
  return (
    <HomeSection id="hobbies" title="Conversation starter">
      <span className="type-label text-muted-foreground">
        <span className="text-gallery-white">I like trying new things,</span>{" "}
        and diving deeply into each. Now I can&apos;t live without{" "}
        <span className="text-gallery-white">
          <HoverTextPreview
            previewImage={["/hobbies/dbz.png", "/hobbies/one-piece.png"]}
            imageAlt={["Dragon Ball Z", "One Piece"]}
          >
            anime
          </HoverTextPreview>
          , designing,{" "}
          <HoverTextPreview
            previewImage={[
              "/hobbies/tb.png",
              "/hobbies/netflix.svg",
              "/hobbies/bb.png",
            ]}
            imageAlt={["The Bear", "Netflix", "Breaking Bad"]}
          >
            binge watching film and tv series
          </HoverTextPreview>
          ,{" "}
          <HoverTextPreview
            previewImage={["/hobbies/f1.png", "/hobbies/ucl.png"]}
            imageAlt={["Formula 1", "UEFA Champions League"]}
          >
            sports
          </HoverTextPreview>
          ,
        </span>{" "}
        and most importantly,
        <span className="text-gallery-white"> my family.</span>
      </span>
    </HomeSection>
  )
}
