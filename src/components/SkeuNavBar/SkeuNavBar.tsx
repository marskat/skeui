"use client";
import cn from "classnames";
// import { Dispatch, SetStateAction } from "react";
// import { Toggle } from ".";
import { GlassPanel } from "../GlassPanel";
import { Aesthetic } from "../SkeuCard/SkeuCard";

// type NavBarProps = {
//   setPlayAboutAnimation: Dispatch<SetStateAction<boolean>>;
//   isDarkMode: boolean;
//   setIsDarkMode: Dispatch<SetStateAction<boolean>>;
//   showSettings: boolean;
//   setShowSettings: Dispatch<SetStateAction<boolean>>;
// };
type SkeuNavBarProps = React.ComponentProps<"div"> & {
  placement?: "bottom" | "left" | "top" | "right";
  aesthetic?: Aesthetic;
};
// TODO: add neumorphic
/**
 * A skeumorphic, sticky navigation bar component.
 *
 * @property {"bottom" | "left" | "top" | "right"} [placement] - Where to place the navigation bar.  Default is `bottom`.
 * @property {Aesthetic} [aesthetic] - [Optional] Skeumorphic styling. Choices are `glassmorphic` and `neumorphic`.  Default is `glassmorphic`.
 *
 * This type extends all standard HTML <div> element attributes.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div
 */
export const SkeuNavBar = ({
  children,
  className,
  placement = "bottom",
  aesthetic = "glassmorphic",
  ...props
}: SkeuNavBarProps) => {
  return (
    <div className="ui">
      {aesthetic === "glassmorphic" && (
        <>
          <div
            className={cn(
              "ui-fixed ui-z-50 ui-flex ui-place-content-center ui-w-fit",
              {
                "ui-w-full ui-bottom-[10%] ui-place-content-center":
                  placement === "bottom",
              },
              {
                "ui-w-full ui-top-[10%] ui-place-content-center":
                  placement === "top",
              },
              {
                "ui-h-full ui-right-[5%] ui-place-items-center":
                  placement === "right",
              },
              {
                "ui-h-full ui-left-[5%] ui-place-items-center":
                  placement === "left",
              }
            )}
            {...props}
          >
            <div
              className={cn(
                "ui-flex ui-p-2 ui-gap-6 ui-rounded-t-full ui-rounded-b-full",
                className
              )}
            >
              <div
                className={cn(
                  "ui-gap-6 ui-justify-around",
                  {
                    "ui-grid ui-grid-flow-col ui-auto-cols-max":
                      placement === "bottom" || placement === "top",
                  },
                  { "ui-grid": placement === "right" || placement === "left" }
                )}
              >
                {children}
              </div>
            </div>
          </div>

          <div
            className={cn(
              "ui-fixed ui-z-50 ui-flex ui-place-content-center ui-w-fit ui-mix-blend-soft-light",
              {
                "ui-w-full ui-bottom-[10%] ui-place-content-center":
                  placement === "bottom",
              },
              {
                "ui-w-full ui-top-[10%] ui-place-content-center":
                  placement === "top",
              },
              {
                "ui-h-full ui-right-[5%] ui-place-items-center":
                  placement === "right",
              },
              {
                "ui-h-full ui-left-[5%] ui-place-items-center":
                  placement === "left",
              }
            )}
            {...props}
          >
            <GlassPanel
              overallClassName="ui-size-fit"
              rounded={["t-full", "b-full"]}
            >
              <div className="ui-flex ui-p-2 ui-gap-6">
                <div
                  className={cn(
                    "ui-gap-6 ui-justify-around ",
                    {
                      "ui-grid ui-grid-flow-col ui-auto-cols-max":
                        placement === "bottom" || placement === "top",
                    },
                    { "ui-grid": placement === "right" || placement === "left" }
                  )}
                >
                  {children}
                </div>
              </div>
            </GlassPanel>
          </div>
        </>
      )}

      {aesthetic === "neumorphic" && <div></div>}
    </div>
  );
};
