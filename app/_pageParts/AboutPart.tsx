import { buttonVariants } from "@/components/ui/button";
import { HoverCard, HoverCardTrigger } from "@/components/ui/hover-card";
import { cn } from "@/lib/utils";
import photo from "@/public/images/photo.jpg";
import wakfu_logo from "@/public/images/tags/wakfu_logo.webp";
import { HoverCardContent } from "@radix-ui/react-hover-card";
import Link from "next/link";
import { Suspense } from "react";
import Balancer from "react-wrap-balancer";
import { Icons } from "../_components/icons";
import { ImageWithTooltip } from "../_components/ImageWithInfo";
import Tag from "../_components/Tag";

const AboutPart: React.FC = () => (
  <div className="flex min-h-dvh flex-col">
    <section
      id="about"
      className="flex flex-1 flex-col items-center justify-center gap-8 bg-gradient-to-tr from-black via-zinc-600/20 to-black text-lg text-foreground"
    >
      <div className="container flex flex-col justify-center sm:flex-row">
        <span className="flex flex-col gap-4">
          <h1 className="mb-8 text-3xl font-medium tracking-tighter">
            So, Hey, I&apos;m Ninhache 🫡
          </h1>

          <h2 className="max-w-screen-md text-justify text-lg leading-8 tracking-wide sm:text-left">
            <Balancer>
              I&apos;m a passionate frontend developer with a positive outlook
              and a dedication to community building ! I&apos;m currently
              building a tool for the{" "}
              <Tag
                src={wakfu_logo}
                text="Wakfu"
                href="https://www.wakfu.com/fr/mmorpg"
              />{" "}
              &apos;s community ! <br></br>(That is private for the moment 😇).
            </Balancer>
          </h2>
          <h2 className="max-w-screen-md text-justify text-lg leading-8 tracking-wide sm:text-left">
            <Balancer>
              You can find my resume over{" "}
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Link
                    href={"href"}
                    className={cn(
                      buttonVariants({ variant: "link" }),
                      "p-0 text-lg font-bold",
                    )}
                  >
                    here
                  </Link>
                </HoverCardTrigger>
                <HoverCardContent align="center" className="w-auto">
                  <div className="flex justify-between space-x-4">
                    <div className="space-y-1">
                      <Link
                        href={"#"}
                        className="group flex items-center gap-1 text-sm"
                      >
                        Open my resume
                        <Icons.arrowPointingTopRight className="group-hover:-rotate-12" />
                      </Link>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>{" "}
              !
            </Balancer>
          </h2>
        </span>

        <div className="flex flex-col items-center justify-end gap-4">
          <Suspense fallback={<p>Loading good mood ...</p>}>
            <div className="loading-indicator">
              <ImageWithTooltip
                static={photo}
                date={new Date("2022-05-13")}
                alt="Photo of me in my room, smiling and giving two thumbs up"
                width={300}
                height={300}
                className="relative z-10 rounded-xl"
              />
            </div>
          </Suspense>
        </div>
      </div>
    </section>
  </div>
);
export default AboutPart;
