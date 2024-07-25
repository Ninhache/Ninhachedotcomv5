import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { cn } from "@/lib/utils";

import { formatDateToDayMonth } from "@/lib/date";
import Image from "next/image";
import { Icons } from "./icons";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

type ImageWithInfoProps = {
  static: StaticImageData;
  alt: string;
  width: number;
  height: number;
  date?: Date;
} & Omit<StaticImageData, "src" | "height" | "width"> &
  React.HTMLAttributes<HTMLImageElement>;

export interface StaticImageData {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
  blurWidth?: number;
  blurHeight?: number;
}

export const ImageWithTooltip = (props: ImageWithInfoProps) => (
  <div className="relative flex flex-col items-end justify-end gap-2">
    <Image
      src={props.static.src}
      alt={props.alt}
      width={300}
      height={300}
      className={cn(props.className)}
    />

    <div className="absolute bottom-2 right-2 z-50">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Icons.informations className="border-1 cursor-pointer rounded-xl bg-black" />
          </TooltipTrigger>
          <TooltipContent align="end">
            <div className="flex justify-between space-x-4">
              <div className="space-y-1">
                <p className="text-sm">{props.alt}</p>
                {props.date && (
                  <div className="flex items-center justify-end pt-2">
                    <span className="text-xs text-muted-foreground">
                      {formatDateToDayMonth(props.date)}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  </div>
);
