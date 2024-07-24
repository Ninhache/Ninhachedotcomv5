import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { cn } from "@/lib/utils";

import Image from "next/image";
import { Icons } from "./icons";
import { formatDateToDayMonth } from "@/lib/date";

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

export const ImageWithInfo = (props: ImageWithInfoProps) => (
  <div className="flex flex-col items-end justify-end gap-2">
    <Image
      src={props.static.src}
      alt={props.alt}
      width={300}
      height={300}
      className={cn(props.className)}
    />

    <HoverCard>
      <HoverCardTrigger asChild>
        <Icons.informations />
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
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
      </HoverCardContent>
    </HoverCard>
  </div>
);
