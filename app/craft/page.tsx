import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { PageFooter } from "@/components/page-footer";
import { TitleText } from "@/components/ui/text";
import { Video } from "@/components/ui/video";
import { craftData } from "@/lib/data/craft";
import { Arrow } from "@/lib/svg/arrow";
import { XformerlyTwitter } from "@/lib/svg/x";

export default function Craft() {
  return <Container gridOne={<CraftGridOne />} gridTwo={<CraftGridTwo />} />;
}

const CraftGridOne = () => {
  return (
    <div className="flex xl:h-[calc(100vh-10.5rem)] flex-col justify-between">
      <section className="text-end">
        {/* <span>Hover over</span>
        <Arrow className="fill-red-500" /> */}
      </section>
      <section className="flex flex-col gap-6">
        <TitleText title="Craft" />
        <p className="text-wrap text-muted-foreground max-w-3/4 font-sans">
          From zero to shipped, from startups to market leaders — here’s a few
          projects we’ve designed along the way.
        </p>
      </section>
    </div>
  );
};

const CraftGridTwo = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-red-500">
        {[...craftData]
          .sort((a, b) => b.id - a.id)
          .map((item) => (
            <div
              key={item.id}
              className="flex flex-col rounded-xl border border-border h-15"
            >
              <div className="relative p-1.5">
                <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-muted shadow-sm">
                  {item.video.includes(".gif") ? (
                    <Image
                      src={item.video}
                      alt={item.alt}
                      width={500}
                      height={500}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <Video
                      src={item.video}
                      className="h-full w-full rounded-none object-cover lg:w-full"
                    />
                  )}
                  <div className="absolute bottom-3 left-3 z-10">
                    <Link
                      href={item.xlink}
                      target="_blank"
                      className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-black/10 px-2 py-1 text-xs font-medium text-white backdrop-blur-md transition-colors hover:bg-black/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 touch-manipulation"
                    >
                      <XformerlyTwitter className="h-3 w-3 fill-white" />
                      View
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <PageFooter />
    </div>
  );
};
