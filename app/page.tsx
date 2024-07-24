import wakfu_logo from "@/public/images/tags/wakfu_logo.webp";
import photo from "@/public/images/photo.jpg";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import { Icons } from "./_components/icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ImageWithInfo } from "./_components/ImageWithInfo";
import Balancer from "react-wrap-balancer";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const LandingPart = () => (
  <div className="flex min-h-dvh flex-col">
    <section className="flex flex-1 flex-col items-center justify-center bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <div className="animate-glow hidden h-px w-screen animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 md:block" />
      <div>
        <h1 className="text-edge-outline z-10 animate-title cursor-default whitespace-nowrap bg-white bg-clip-text px-0.5 py-3.5 font-display text-4xl text-transparent duration-1000 sm:text-6xl md:text-9xl">
          Ninhache
        </h1>

        <h2 className="z-10 animate-subtitle cursor-default whitespace-nowrap bg-white bg-clip-text px-0.5 py-3.5 text-right font-display text-transparent sm:text-sm md:text-xl">
          Aka Neo
        </h2>
      </div>

      <div className="animate-glow hidden h-px w-screen animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 md:block" />
      <div className="my-16 animate-fade-in text-center">
        <h2 className="text-sm text-zinc-500">
          I&apos;m a FullStack developper that likes to <del>suffer</del> make
          projects !
        </h2>

        <Link
          href={"#about"}
          className="mt-8 flex justify-center rounded-lg p-4 text-center text-white"
        >
          <Icons.chevronDown className="animate-bounce" />
          <span className="sr-only">Scroll down</span>
        </Link>
      </div>
    </section>
  </div>
);

interface TagProps {
  src?: StaticImageData;
  text: string;
  href: string;
}
const Tag: React.FC<TagProps> = ({ src, text, href }) => (
  <HoverCard>
    <HoverCardTrigger asChild>
      <Link
        href={href}
        className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm font-bold leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
      >
        {src && (
          <span className="mr-1 inline-flex">
            <Image src={src} alt={`${text} logomark`} width={16} height={14} />
          </span>
        )}
        {text}
      </Link>
    </HoverCardTrigger>
    <HoverCardContent align="center" className="h-20 w-40">
      <div className="flex justify-between space-x-4">
        <div className="space-y-1">
          <p className="text-sm">
            Open the link to land on{" "}
            <Link
              href={href}
              className={cn(
                buttonVariants({ variant: "link" }),
                "p-0 font-bold",
              )}
            >
              {text}
            </Link>
          </p>
        </div>
      </div>
    </HoverCardContent>
  </HoverCard>
);

const AboutPart = () => (
  <div className="flex min-h-dvh flex-col">
    <section className="flex flex-1 flex-col items-center justify-center gap-8 bg-gradient-to-tr from-black via-zinc-600/20 to-black text-lg text-foreground">
      <div className="container flex flex-col justify-center sm:flex-row">
        <span className="flex flex-col gap-4">
          <h1 className="mb-8 text-3xl font-medium tracking-tighter">
            So, Hey, I&apos;m Ninhache 🫡
          </h1>
          <h2
            id="about"
            className="max-w-screen-md text-justify text-lg leading-8 tracking-wide sm:text-left"
          >
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
            <ImageWithInfo
              static={photo}
              date={new Date("2022-05-13")}
              alt="Photo of me in my room, smiling and giving two thumbs up"
              width={300}
              height={300}
              className="rounded-lg"
            />
          </Suspense>
        </div>
      </div>
    </section>
  </div>
);

export default function Home() {
  return (
    <>
      <LandingPart />
      <AboutPart />
    </>
  );
}
