import Link from "next/link";
import { GitHub } from "@/lib/svg/github";
import { LinkedInIcon } from "@/lib/svg/linkedin";
import { XformerlyTwitter } from "@/lib/svg/x";

export const PageFooter = () => {
  return (
    <div className="flex flex-col gap-2 text-muted-foreground text-sm font-sans">
      <span>
        Build by <span className="text-primary font-medium">@diip3sh</span>
      </span>
      <span>
        Source code on{" "}
        <Link
          href="https://github.com/diip3sh/portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-bold uppercase tracking-normal font-mono hover:text-primary transition-colors"
        >
          GitHub
        </Link>
      </span>
      <div className="flex gap-2 items-center">
        <span>Follow on</span>
        <Link
          href={"https://www.x.com/diip3sh"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <XformerlyTwitter
            fill="#00000a"
            height={12}
            width={12}
            aria-label="X (formerly Twitter)"
          />
        </Link>
        ,
        <Link
          href={"https://www.linkedin.com/in/diip3sh/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon
            fill="#00000a"
            height={16}
            width={16}
            aria-label="LinkedIn"
          />
        </Link>{" "}
        OR{" "}
        <Link
          href={"https://github.com/diip3sh"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub fill="#00000a" height={16} width={16} aria-label="GitHub" />
        </Link>
      </div>
    </div>
  );
};
