"use client";
import cn from "classnames";
// import { Dispatch, SetStateAction } from "react";
// import { Toggle } from ".";
import { GlassPanel } from "../GlassPanel";

// type NavBarProps = {
//   setPlayAboutAnimation: Dispatch<SetStateAction<boolean>>;
//   isDarkMode: boolean;
//   setIsDarkMode: Dispatch<SetStateAction<boolean>>;
//   showSettings: boolean;
//   setShowSettings: Dispatch<SetStateAction<boolean>>;
// };
type NavBarProps = React.ComponentProps<"div"> & {
  placement?: "bottom" | "left" | "top" | "right";
};
export const NavBar = ({
  children,
  className,
  placement = "bottom",
  ...props
}: NavBarProps) =>
  //   setPlayAboutAnimation,
  //   isDarkMode,
  //   setIsDarkMode,
  //   showSettings,
  //   setShowSettings,
  {
    return (
      <div className="ui">
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
            },
            className
          )}
          {...props}
        >
          <GlassPanel
            overallClassName="ui-size-fit"
            rounded={["t-full", "b-full"]}
          >
            <div className="ui-flex ui-p-2 ui-gap-6 ui-border ui-border-text/30">
              <div
                className={cn(
                  "ui-gap-6 ui-justify-around",
                  {
                    "ui-grid ui-grid-cols-4":
                      placement === "bottom" || placement === "top",
                  },
                  { "ui-grid": placement === "right" || placement === "left" }
                )}
              >
                {children}

                {/* <Toggle isAltTheme={isDarkMode} setIsAltTheme={setIsDarkMode} /> */}
              </div>
            </div>
          </GlassPanel>
        </div>
      </div>
    );
  };
