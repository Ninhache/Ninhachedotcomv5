import { buttonVariants } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

declare interface TagProps {
  src: StaticImageData;
  text: string;
  href: string;
}

// Define the Tag component with type annotations
const Tag: React.FC<TagProps> = ({ src, text, href }) => (
  <HoverCard>
    <HoverCardTrigger asChild>
      <Link
        href={href}
        className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm font-bold leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
      >
        {src && (
          <span className="mr-1 inline-flex">
            <Image src={src} alt={`${text} logomark`} width={18} height={16} />
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

export default Tag;
