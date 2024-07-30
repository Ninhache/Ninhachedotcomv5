"use client";

import Link from "next/link";
import { Icons } from "../_components/icons";
import { useTheme } from "next-themes";

const LandingPart: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="flex min-h-dvh flex-col">
      <section
        className={`flex flex-1 flex-col items-center justify-center bg-gradient-to-tl ${
          theme === "dark"
            ? "bg-gradient-to-tl from-black via-zinc-600/20 to-black"
            : "bg-gradient-to-tl from-white via-zinc-100/70 to-white"
        }`}
      >
        <div className="animate-glow hidden h-px w-screen animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 md:block" />
        <div>
          <h1 className="text-edge-outline pulse z-10 animate-title cursor-default whitespace-nowrap bg-primary bg-clip-text px-0.5 py-3.5 font-display text-4xl text-transparent duration-1000 sm:text-6xl md:text-9xl">
            <div className="animate-pulseText cursor-text">Ninhache</div>
          </h1>

          <h2 className="z-10 animate-subtitle cursor-text whitespace-nowrap bg-primary bg-clip-text px-0.5 py-3.5 text-right font-display text-transparent sm:text-sm md:text-xl">
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
            className="mt-8 flex justify-center rounded-lg p-4 text-center text-primary"
          >
            <Icons.chevronDown className="animate-bounce" />
            <span className="sr-only">Scroll down</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPart;
