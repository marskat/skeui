"use client";
import cn from "classnames";
// import { Dispatch, SetStateAction } from "react";
// import { Toggle } from ".";
import { Aesthetic, Card } from "../Card/card";

// type NavBarProps = {
//   setPlayAboutAnimation: Dispatch<SetStateAction<boolean>>;
//   isDarkMode: boolean;
//   setIsDarkMode: Dispatch<SetStateAction<boolean>>;
//   showSettings: boolean;
//   setShowSettings: Dispatch<SetStateAction<boolean>>;
// };
type NavBarProps = React.ComponentProps<"div"> & {
  placement?: "bottom" | "left" | "top" | "right";
  aesthetic?: Aesthetic;
};
// TODO: add neumorphic
/**
 * A skeuomorphic, sticky navigation bar component.
 *
 * @property {"bottom" | "left" | "top" | "right"} [placement] - Where to place the navigation bar.  Default is `bottom`.
 * @property {Aesthetic} [aesthetic] - [Optional] Skeuomorphic styling. Choices are `glassmorphic` and `neumorphic`.  Default is `glassmorphic`.
 *
 * This type extends all standard HTML <div> element attributes.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div
 */
export const NavBar = ({
  children,
  className,
  placement = "bottom",
  aesthetic = "glassmorphic",
  ...props
}: NavBarProps) => {
  return (
    <div className="skeui">
      {aesthetic === "glassmorphic" && (
        <>
          <div
            className={cn(
              "skeui-fixed skeui-z-50 skeui-flex skeui-place-content-center skeui-w-fit",
              {
                "skeui-w-full skeui-bottom-[10%] skeui-place-content-center":
                  placement === "bottom",
              },
              {
                "skeui-w-full skeui-top-[10%] skeui-place-content-center":
                  placement === "top",
              },
              {
                "skeui-h-full skeui-right-[5%] skeui-place-items-center":
                  placement === "right",
              },
              {
                "skeui-h-full skeui-left-[5%] skeui-place-items-center":
                  placement === "left",
              }
            )}
            {...props}
          >
            <div
              className={cn(
                "skeui-flex skeui-p-2 skeui-gap-6 skeui-rounded-t-full skeui-rounded-b-full",
                className
              )}
            >
              <div
                className={cn(
                  "skeui-gap-6 skeui-justify-around",
                  {
                    "skeui-grid skeui-grid-flow-col skeui-auto-cols-max":
                      placement === "bottom" || placement === "top",
                  },
                  {
                    "skeui-grid": placement === "right" || placement === "left",
                  }
                )}
              >
                {children}
              </div>
            </div>
          </div>

          <div
            className={cn(
              "skeui-fixed skeui-z-50 skeui-flex skeui-place-content-center skeui-w-fit skeui-mix-blend-soft-light",
              {
                "skeui-w-full skeui-bottom-[10%] skeui-place-content-center":
                  placement === "bottom",
              },
              {
                "skeui-w-full skeui-top-[10%] skeui-place-content-center":
                  placement === "top",
              },
              {
                "skeui-h-full skeui-right-[5%] skeui-place-items-center":
                  placement === "right",
              },
              {
                "skeui-h-full skeui-left-[5%] skeui-place-items-center":
                  placement === "left",
              }
            )}
            {...props}
          >
            <div className="skeui-size-fit">
              <Card
                aesthetic="glassmorphic"
                className="skeui-size-fit skeui-gp-outside-shadow"
              >
                <div className="skeui-flex skeui-p-2 skeui-gap-6">
                  <div
                    className={cn(
                      "skeui-gap-6 skeui-justify-around ",
                      {
                        "skeui-grid skeui-grid-flow-col skeui-auto-cols-max":
                          placement === "bottom" || placement === "top",
                      },
                      {
                        "skeui-grid":
                          placement === "right" || placement === "left",
                      }
                    )}
                  >
                    {children}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </>
      )}

      {aesthetic === "neumorphic" && (
        <>
          <div
            className={cn(
              "skeui-fixed skeui-z-50 skeui-flex skeui-place-content-center skeui-w-fit",
              {
                "skeui-w-full skeui-bottom-[10%] skeui-place-content-center":
                  placement === "bottom",
              },
              {
                "skeui-w-full skeui-top-[10%] skeui-place-content-center":
                  placement === "top",
              },
              {
                "skeui-h-full skeui-right-[5%] skeui-place-items-center":
                  placement === "right",
              },
              {
                "skeui-h-full skeui-left-[5%] skeui-place-items-center":
                  placement === "left",
              }
            )}
            {...props}
          >
            <div
              className={cn(
                "skeui-flex skeui-p-2 skeui-gap-6 skeui-rounded-t-full skeui-rounded-b-full",
                className
              )}
            >
              <div
                className={cn(
                  "skeui-gap-6 skeui-justify-around",
                  {
                    "skeui-grid skeui-grid-flow-col skeui-auto-cols-max":
                      placement === "bottom" || placement === "top",
                  },
                  {
                    "skeui-grid": placement === "right" || placement === "left",
                  }
                )}
              >
                {children}
              </div>
            </div>
          </div>

          <div
            className={cn(
              "skeui-fixed skeui-z-50 skeui-flex skeui-place-content-center skeui-w-fit skeui-mix-blend-soft-light",
              {
                "skeui-w-full skeui-bottom-[10%] skeui-place-content-center":
                  placement === "bottom",
              },
              {
                "skeui-w-full skeui-top-[10%] skeui-place-content-center":
                  placement === "top",
              },
              {
                "skeui-h-full skeui-right-[5%] skeui-place-items-center":
                  placement === "right",
              },
              {
                "skeui-h-full skeui-left-[5%] skeui-place-items-center":
                  placement === "left",
              }
            )}
            {...props}
          >
            <div className="skeui-size-fit">
              <Card
                aesthetic="neumorphic"
                className="skeui-size-fit"
                fullyRounded={true}
              >
                <div className="skeui-flex skeui-gap-6 skeui-size-fit">
                  <div
                    className={cn(
                      "skeui-gap-6 skeui-justify-around ",
                      {
                        "skeui-grid skeui-grid-flow-col skeui-auto-cols-max":
                          placement === "bottom" || placement === "top",
                      },
                      {
                        "skeui-grid":
                          placement === "right" || placement === "left",
                      }
                    )}
                  >
                    {children}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
