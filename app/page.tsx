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
  text: string;
}
const Tag: React.FC<TagProps> = ({ text }) => (
  <Link
    href="https://www.wakfu.com/fr/mmorpg"
    className="inline-flex items-center gap-2 rounded-md border border-neutral-500 border-opacity-35 bg-neutral-800 px-2 py-1 hover:bg-opacity-40"
  >
    <Image src={wakfu_logo} alt={`${text}'s logo`} width={24} height={24} />
    {text}
  </Link>
);

const AboutPart = () => (
  <div className="flex min-h-dvh flex-col">
    <section className="flex flex-1 flex-col items-center justify-center gap-8 bg-gradient-to-tr from-black via-zinc-600/20 to-black text-lg text-foreground">
      <h2 id="about" className="text-center">
        <Balancer>
          I&apos;m a passionate frontend developer with a positive outlook and a
          dedication to community building ! I&apos;m currently building a tool
          for <Tag text="Wakfu" /> (That is private for the moment 😇).
        </Balancer>
      </h2>

      <div className="flex flex-col items-center justify-end gap-4">
        <Suspense fallback={<p>Loading good mood ...</p>}>
          <ImageWithInfo
            static={photo}
            date={new Date("2022-05-13")}
            alt="Picture of me in my bedroom smiling and having both of my thumbs up"
            width={300}
            height={300}
            className="rounded-lg"
          />
        </Suspense>

        <Button
          className={cn(buttonVariants({ variant: "default" }), "group w-40")}
        >
          <Icons.arrowPointingTopRight className="transition-all duration-300 group-hover:-rotate-12" />
          Resume
        </Button>
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
