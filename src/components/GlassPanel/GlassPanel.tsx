// export type RoundedOption =
//   | "r-full"
//   | "b-full"
//   | "l-full"
//   | "t-full"
//   | "tl-full"
//   | "bl-full"
//   | "br-full"
//   | "tr-full";

// const roundedClassMap: Record<RoundedOption, string> = {
//   "r-full": "ui-rounded-r-full",
//   "b-full": "ui-rounded-b-full",
//   "l-full": "ui-rounded-l-full",
//   "t-full": "ui-rounded-t-full",
//   "tl-full": "ui-rounded-tl-full",
//   "bl-full": "ui-rounded-bl-full",
//   "br-full": "ui-rounded-br-full",
//   "tr-full": "ui-rounded-tr-full",
// };

// const beforeRoundedClassMap: Record<RoundedOption, string> = {
//   "r-full": "before:ui-rounded-r-full",
//   "b-full": "before:ui-rounded-b-full",
//   "l-full": "before:ui-rounded-l-full",
//   "t-full": "before:ui-rounded-t-full",
//   "tl-full": "before:ui-rounded-tl-full",
//   "bl-full": "before:ui-rounded-bl-full",
//   "br-full": "before:ui-rounded-br-full",
//   "tr-full": "before:ui-rounded-tr-full",
// };

// function getRoundedClasses(
//   rounded: RoundedOption | RoundedOption[] = "b-full"
// ): string[] {
//   const arr = Array.isArray(rounded) ? rounded : [rounded];
//   return arr.map((r) => roundedClassMap[r]);
// }

// function getBeforeRoundedClasses(
//   rounded: RoundedOption | RoundedOption[] = "b-full"
// ): string[] {
//   const arr = Array.isArray(rounded) ? rounded : [rounded];
//   return arr.map((r) => beforeRoundedClassMap[r]);
// }

// import cn from "classnames";

// export type GlassPanelProps = {
//   rounded?: RoundedOption | RoundedOption[];
//   className?: string;
//   overallClassName?: string;
//   children?: React.ReactNode;
// };

// export const GlassPanel = ({
//   rounded = "b-full",
//   className,
//   overallClassName,
//   children,
// }: GlassPanelProps) => {
//   const roundedClasses = getRoundedClasses(rounded);
//   const beforeRoundedClasses = getBeforeRoundedClasses(rounded);

//   return (
//     <div className={cn("ui", overallClassName)}>
//       <div
//         className={cn(
//           "before:ui-nm-outside-shadow before:ui-block before:ui-absolute before:ui-inset-0 before:ui-content-[''] ui-inline-block ui-size-full ui-relative",
//           beforeRoundedClasses
//         )}
//       >
//         <div
//           className={cn(
//             "ui-backdrop-blur-2xl ui-soft-transition ui-gp-inside-shadow ui-size-full ui-relative ui-overflow-clip",
//             roundedClasses,
//             className
//           )}
//         >
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// };

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
  "r-full": "ui-rounded-r-full",
  "r-2xl": "ui-rounded-r-2xl",
  "r-xl": "ui-rounded-r-xl",
  "r-lg": "ui-rounded-r-lg",
  "r-md": "ui-rounded-r-md",
  "r-sm": "ui-rounded-r-sm",
  // Bottom
  "b-full": "ui-rounded-b-full",
  "b-2xl": "ui-rounded-b-2xl",
  "b-xl": "ui-rounded-b-xl",
  "b-lg": "ui-rounded-b-lg",
  "b-md": "ui-rounded-b-md",
  "b-sm": "ui-rounded-b-sm",
  // Left
  "l-full": "ui-rounded-l-full",
  "l-2xl": "ui-rounded-l-2xl",
  "l-xl": "ui-rounded-l-xl",
  "l-lg": "ui-rounded-l-lg",
  "l-md": "ui-rounded-l-md",
  "l-sm": "ui-rounded-l-sm",
  // Top
  "t-full": "ui-rounded-t-full",
  "t-2xl": "ui-rounded-t-2xl",
  "t-xl": "ui-rounded-t-xl",
  "t-lg": "ui-rounded-t-lg",
  "t-md": "ui-rounded-t-md",
  "t-sm": "ui-rounded-t-sm",
  // Top-left
  "tl-full": "ui-rounded-tl-full",
  "tl-2xl": "ui-rounded-tl-2xl",
  "tl-xl": "ui-rounded-tl-xl",
  "tl-lg": "ui-rounded-tl-lg",
  "tl-md": "ui-rounded-tl-md",
  "tl-sm": "ui-rounded-tl-sm",
  // Bottom-left
  "bl-full": "ui-rounded-bl-full",
  "bl-2xl": "ui-rounded-bl-2xl",
  "bl-xl": "ui-rounded-bl-xl",
  "bl-lg": "ui-rounded-bl-lg",
  "bl-md": "ui-rounded-bl-md",
  "bl-sm": "ui-rounded-bl-sm",
  // Bottom-right
  "br-full": "ui-rounded-br-full",
  "br-2xl": "ui-rounded-br-2xl",
  "br-xl": "ui-rounded-br-xl",
  "br-lg": "ui-rounded-br-lg",
  "br-md": "ui-rounded-br-md",
  "br-sm": "ui-rounded-br-sm",
  // Top-right
  "tr-full": "ui-rounded-tr-full",
  "tr-2xl": "ui-rounded-tr-2xl",
  "tr-xl": "ui-rounded-tr-xl",
  "tr-lg": "ui-rounded-tr-lg",
  "tr-md": "ui-rounded-tr-md",
  "tr-sm": "ui-rounded-tr-sm",
};

const beforeRoundedClassMap: Record<RoundedOption, string> = {
  // Right
  "r-full": "before:ui-rounded-r-full",
  "r-2xl": "before:ui-rounded-r-2xl",
  "r-xl": "before:ui-rounded-r-xl",
  "r-lg": "before:ui-rounded-r-lg",
  "r-md": "before:ui-rounded-r-md",
  "r-sm": "before:ui-rounded-r-sm",
  // Bottom
  "b-full": "before:ui-rounded-b-full",
  "b-2xl": "before:ui-rounded-b-2xl",
  "b-xl": "before:ui-rounded-b-xl",
  "b-lg": "before:ui-rounded-b-lg",
  "b-md": "before:ui-rounded-b-md",
  "b-sm": "before:ui-rounded-b-sm",
  // Left
  "l-full": "before:ui-rounded-l-full",
  "l-2xl": "before:ui-rounded-l-2xl",
  "l-xl": "before:ui-rounded-l-xl",
  "l-lg": "before:ui-rounded-l-lg",
  "l-md": "before:ui-rounded-l-md",
  "l-sm": "before:ui-rounded-l-sm",
  // Top
  "t-full": "before:ui-rounded-t-full",
  "t-2xl": "before:ui-rounded-t-2xl",
  "t-xl": "before:ui-rounded-t-xl",
  "t-lg": "before:ui-rounded-t-lg",
  "t-md": "before:ui-rounded-t-md",
  "t-sm": "before:ui-rounded-t-sm",
  // Top-left
  "tl-full": "before:ui-rounded-tl-full",
  "tl-2xl": "before:ui-rounded-tl-2xl",
  "tl-xl": "before:ui-rounded-tl-xl",
  "tl-lg": "before:ui-rounded-tl-lg",
  "tl-md": "before:ui-rounded-tl-md",
  "tl-sm": "before:ui-rounded-tl-sm",
  // Bottom-left
  "bl-full": "before:ui-rounded-bl-full",
  "bl-2xl": "before:ui-rounded-bl-2xl",
  "bl-xl": "before:ui-rounded-bl-xl",
  "bl-lg": "before:ui-rounded-bl-lg",
  "bl-md": "before:ui-rounded-bl-md",
  "bl-sm": "before:ui-rounded-bl-sm",
  // Bottom-right
  "br-full": "before:ui-rounded-br-full",
  "br-2xl": "before:ui-rounded-br-2xl",
  "br-xl": "before:ui-rounded-br-xl",
  "br-lg": "before:ui-rounded-br-lg",
  "br-md": "before:ui-rounded-br-md",
  "br-sm": "before:ui-rounded-br-sm",
  // Top-right
  "tr-full": "before:ui-rounded-tr-full",
  "tr-2xl": "before:ui-rounded-tr-2xl",
  "tr-xl": "before:ui-rounded-tr-xl",
  "tr-lg": "before:ui-rounded-tr-lg",
  "tr-md": "before:ui-rounded-tr-md",
  "tr-sm": "before:ui-rounded-tr-sm",
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
            "before:ui-nm-outside-highlight before:ui-block before:ui-absolute before:ui-inset-0 before:ui-content-[''] ui-inline-block ui-size-full ui-relative",
            beforeRoundedClasses
          )}
        >
          <div
            className={cn(
              "before:ui-nm-outside-shadow before:ui-block before:ui-absolute before:ui-inset-0 before:ui-content-[''] ui-inline-block ui-size-full ui-relative",
              beforeRoundedClasses
            )}
          >
            <div
              className={cn(
                "ui-backdrop-blur-2xl ui-soft-transition ui-gp-inside-shadow ui-size-full ui-relative ui-overflow-clip",
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
            "ui-backdrop-blur-2xl ui-soft-transition ui-gp-inside-shadow ui-size-full ui-relative ui-overflow-clip",
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
