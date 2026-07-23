import Image from "next/image";
import { media } from "@/data/media";

export function MatchaCupSplit({ debug = false }: { debug?: boolean }) {
  return (
    <div className="cup-stage" style={{ "--cup-split-x": "46.6%" } as React.CSSProperties}>
      <div className="cup-shadow cup-shadow-left" />
      <div className="cup-shadow cup-shadow-right" />
      <div className="cup-full">
        <Image src={media.intro.cupAlpha} alt="" fill priority unoptimized sizes="620px" />
      </div>
      <div className="cup-half cup-left">
        <Image src={media.intro.cupAlpha} alt="" fill priority unoptimized sizes="620px" />
      </div>
      <div className="cup-half cup-right">
        <Image src={media.intro.cupAlpha} alt="" fill priority unoptimized sizes="620px" />
      </div>
      <span className="cup-seam" aria-hidden="true" />
      {debug ? (
        <Image
          className="debug-split"
          src={media.intro.split}
          alt=""
          fill
          sizes="760px"
        />
      ) : null}
    </div>
  );
}
