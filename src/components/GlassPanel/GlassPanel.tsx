export type RoundedOption =
  | "r-full"
  | "r-2xl"
  | "r-xl"
  | "r-lg"
  | "r-md"
  | "r-sm"
  | "b-full"
  | "b-2xl"
  | "b-xl"
  | "b-lg"
  | "b-md"
  | "b-sm"
  | "l-full"
  | "l-2xl"
  | "l-xl"
  | "l-lg"
  | "l-md"
  | "l-sm"
  | "t-full"
  | "t-2xl"
  | "t-xl"
  | "t-lg"
  | "t-md"
  | "t-sm"
  | "tl-full"
  | "tl-2xl"
  | "tl-xl"
  | "tl-lg"
  | "tl-md"
  | "tl-sm"
  | "bl-full"
  | "bl-2xl"
  | "bl-xl"
  | "bl-lg"
  | "bl-md"
  | "bl-sm"
  | "br-full"
  | "br-2xl"
  | "br-xl"
  | "br-lg"
  | "br-md"
  | "br-sm"
  | "tr-full"
  | "tr-2xl"
  | "tr-xl"
  | "tr-lg"
  | "tr-md"
  | "tr-sm";

const roundedClassMap: Record<RoundedOption, string> = {
  // Right
  "r-full": "skeui-rounded-r-full",
  "r-2xl": "skeui-rounded-r-2xl",
  "r-xl": "skeui-rounded-r-xl",
  "r-lg": "skeui-rounded-r-lg",
  "r-md": "skeui-rounded-r-md",
  "r-sm": "skeui-rounded-r-sm",
  // Bottom
  "b-full": "skeui-rounded-b-full",
  "b-2xl": "skeui-rounded-b-2xl",
  "b-xl": "skeui-rounded-b-xl",
  "b-lg": "skeui-rounded-b-lg",
  "b-md": "skeui-rounded-b-md",
  "b-sm": "skeui-rounded-b-sm",
  // Left
  "l-full": "skeui-rounded-l-full",
  "l-2xl": "skeui-rounded-l-2xl",
  "l-xl": "skeui-rounded-l-xl",
  "l-lg": "skeui-rounded-l-lg",
  "l-md": "skeui-rounded-l-md",
  "l-sm": "skeui-rounded-l-sm",
  // Top
  "t-full": "skeui-rounded-t-full",
  "t-2xl": "skeui-rounded-t-2xl",
  "t-xl": "skeui-rounded-t-xl",
  "t-lg": "skeui-rounded-t-lg",
  "t-md": "skeui-rounded-t-md",
  "t-sm": "skeui-rounded-t-sm",
  // Top-left
  "tl-full": "skeui-rounded-tl-full",
  "tl-2xl": "skeui-rounded-tl-2xl",
  "tl-xl": "skeui-rounded-tl-xl",
  "tl-lg": "skeui-rounded-tl-lg",
  "tl-md": "skeui-rounded-tl-md",
  "tl-sm": "skeui-rounded-tl-sm",
  // Bottom-left
  "bl-full": "skeui-rounded-bl-full",
  "bl-2xl": "skeui-rounded-bl-2xl",
  "bl-xl": "skeui-rounded-bl-xl",
  "bl-lg": "skeui-rounded-bl-lg",
  "bl-md": "skeui-rounded-bl-md",
  "bl-sm": "skeui-rounded-bl-sm",
  // Bottom-right
  "br-full": "skeui-rounded-br-full",
  "br-2xl": "skeui-rounded-br-2xl",
  "br-xl": "skeui-rounded-br-xl",
  "br-lg": "skeui-rounded-br-lg",
  "br-md": "skeui-rounded-br-md",
  "br-sm": "skeui-rounded-br-sm",
  // Top-right
  "tr-full": "skeui-rounded-tr-full",
  "tr-2xl": "skeui-rounded-tr-2xl",
  "tr-xl": "skeui-rounded-tr-xl",
  "tr-lg": "skeui-rounded-tr-lg",
  "tr-md": "skeui-rounded-tr-md",
  "tr-sm": "skeui-rounded-tr-sm",
};

const beforeRoundedClassMap: Record<RoundedOption, string> = {
  // Right
  "r-full": "before:skeui-rounded-r-full",
  "r-2xl": "before:skeui-rounded-r-2xl",
  "r-xl": "before:skeui-rounded-r-xl",
  "r-lg": "before:skeui-rounded-r-lg",
  "r-md": "before:skeui-rounded-r-md",
  "r-sm": "before:skeui-rounded-r-sm",
  // Bottom
  "b-full": "before:skeui-rounded-b-full",
  "b-2xl": "before:skeui-rounded-b-2xl",
  "b-xl": "before:skeui-rounded-b-xl",
  "b-lg": "before:skeui-rounded-b-lg",
  "b-md": "before:skeui-rounded-b-md",
  "b-sm": "before:skeui-rounded-b-sm",
  // Left
  "l-full": "before:skeui-rounded-l-full",
  "l-2xl": "before:skeui-rounded-l-2xl",
  "l-xl": "before:skeui-rounded-l-xl",
  "l-lg": "before:skeui-rounded-l-lg",
  "l-md": "before:skeui-rounded-l-md",
  "l-sm": "before:skeui-rounded-l-sm",
  // Top
  "t-full": "before:skeui-rounded-t-full",
  "t-2xl": "before:skeui-rounded-t-2xl",
  "t-xl": "before:skeui-rounded-t-xl",
  "t-lg": "before:skeui-rounded-t-lg",
  "t-md": "before:skeui-rounded-t-md",
  "t-sm": "before:skeui-rounded-t-sm",
  // Top-left
  "tl-full": "before:skeui-rounded-tl-full",
  "tl-2xl": "before:skeui-rounded-tl-2xl",
  "tl-xl": "before:skeui-rounded-tl-xl",
  "tl-lg": "before:skeui-rounded-tl-lg",
  "tl-md": "before:skeui-rounded-tl-md",
  "tl-sm": "before:skeui-rounded-tl-sm",
  // Bottom-left
  "bl-full": "before:skeui-rounded-bl-full",
  "bl-2xl": "before:skeui-rounded-bl-2xl",
  "bl-xl": "before:skeui-rounded-bl-xl",
  "bl-lg": "before:skeui-rounded-bl-lg",
  "bl-md": "before:skeui-rounded-bl-md",
  "bl-sm": "before:skeui-rounded-bl-sm",
  // Bottom-right
  "br-full": "before:skeui-rounded-br-full",
  "br-2xl": "before:skeui-rounded-br-2xl",
  "br-xl": "before:skeui-rounded-br-xl",
  "br-lg": "before:skeui-rounded-br-lg",
  "br-md": "before:skeui-rounded-br-md",
  "br-sm": "before:skeui-rounded-br-sm",
  // Top-right
  "tr-full": "before:skeui-rounded-tr-full",
  "tr-2xl": "before:skeui-rounded-tr-2xl",
  "tr-xl": "before:skeui-rounded-tr-xl",
  "tr-lg": "before:skeui-rounded-tr-lg",
  "tr-md": "before:skeui-rounded-tr-md",
  "tr-sm": "before:skeui-rounded-tr-sm",
};

function getRoundedClasses(
  rounded: RoundedOption | RoundedOption[] = "b-full"
): string[] {
  const arr = Array.isArray(rounded) ? rounded : [rounded];
  return arr.map((r) => roundedClassMap[r]);
}

function getBeforeRoundedClasses(
  rounded: RoundedOption | RoundedOption[] = "b-full"
): string[] {
  const arr = Array.isArray(rounded) ? rounded : [rounded];
  return arr.map((r) => beforeRoundedClassMap[r]);
}

import cn from "classnames";

export type GlassPanelProps = React.ComponentProps<"div"> & {
  rounded?: RoundedOption | RoundedOption[];
  className?: string;
  overallClassName?: string;
  children?: React.ReactNode;
  neumorphic?: boolean;
};

// TODO: get rid of this
export const GlassPanel = ({
  rounded = "b-full",
  className,
  overallClassName,
  children,
  neumorphic = false,
  ...props
}: GlassPanelProps) => {
  const roundedClasses = getRoundedClasses(rounded);
  const beforeRoundedClasses = getBeforeRoundedClasses(rounded);

  return (
    <div className={cn("ui", overallClassName)} {...props}>
      {neumorphic && (
        <div
          className={cn(
            "before:skeui-nm-outside-highlight before:skeui-block before:skeui-absolute before:skeui-inset-0 before:skeui-content-[''] skeui-inline-block skeui-size-full skeui-relative",
            beforeRoundedClasses
          )}
        >
          <div
            className={cn(
              "before:skeui-nm-outside-shadow before:skeui-block before:skeui-absolute before:skeui-inset-0 before:skeui-content-[''] skeui-inline-block skeui-size-full skeui-relative",
              beforeRoundedClasses
            )}
          >
            <div
              className={cn(
                "skeui-backdrop-blur-2xl skeui-soft-transition skeui-gp-inside-shadow skeui-size-full skeui-relative skeui-overflow-clip",
                roundedClasses,
                className
              )}
            >
              {children}
            </div>
          </div>
        </div>
      )}

      {!neumorphic && (
        <div
          className={cn(
            "skeui-backdrop-blur-2xl skeui-soft-transition skeui-gp-inside-shadow skeui-size-full skeui-relative skeui-overflow-clip",
            roundedClasses,
            className
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
};
