import cn from "classnames";

const aesthetics = ["glassmorphic", "neumorphic"] as const;
export type Aesthetic = (typeof aesthetics)[number];

export type CardProps = React.ComponentProps<"div"> & {
  aesthetic?: Aesthetic;
  inset?: boolean;
  fullyRounded?: boolean;
};
/**
 * A skeuomorphic card component.
 *
 * Wrap any element in this component to render it on the card.
 *
 * @property {Aesthetic} [aesthetic] - [Optional] Skeuomorphic styling. Choices are `glassmorphic` and `neumorphic`.  Default is `glassmorphic`.
 * @property {boolean} [inset] - [Optional] Apply neumorphic inset.  Default is `false`.
 * @property {string} [fullyRounded] - [Optional] Applies full rounding.  Default is `false`.
 *
 * This type extends all standard HTML `<div>` element attributes.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div
 */
export const Card = ({
  children,
  className,
  inset = false,
  fullyRounded = false,
  aesthetic = "glassmorphic",
  ...props
}: CardProps) => {
  return (
    <div className="skeui skeui-size-full">
      {aesthetic === "glassmorphic" && (
        <div
          className={cn(
            "skeui-backdrop-blur-2xl skeui-soft-transition skeui-gp-inside-shadow skeui-size-full skeui-relative",
            className
          )}
          {...props}
        >
          {children}
          <div
            className={cn(
              "skeui-size-full skeui-absolute skeui-top-0 skeui-left-0 skeui-mt-0.5 skeui-ml-0.5 skeui-opacity-10",
              className
            )}
            {...props}
          >
            {children}
          </div>
        </div>
      )}
      {aesthetic === "neumorphic" && (
        <>
          {!inset && (
            <div
              className={cn(
                "before:skeui-nm-outside-highlight before:skeui-block before:skeui-absolute before:skeui-inset-0 before:skeui-content-[''] skeui-inline-block skeui-size-full skeui-relative",
                `${
                  fullyRounded
                    ? "before:skeui-rounded-t-full before:skeui-rounded-b-full"
                    : "before:skeui-rounded-t before:skeui-rounded-b"
                }`
              )}
            >
              <div
                className={cn(
                  "before:skeui-nm-outside-shadow before:skeui-block before:skeui-absolute before:skeui-inset-0 before:skeui-content-[''] skeui-inline-block skeui-size-full skeui-relative",
                  `${
                    fullyRounded
                      ? "before:skeui-rounded-t-full before:skeui-rounded-b-full"
                      : "before:skeui-rounded-t before:skeui-rounded-b"
                  }`
                )}
              >
                <div
                  className={cn(
                    "skeui-size-full skeui-p-2 skeui-rounded skeui-rounded-t skeui-rounded-b",
                    `${
                      fullyRounded
                        ? "skeui-rounded-t-full skeui-rounded-b-full"
                        : "skeui-rounded-t skeui-rounded-b"
                    }`
                  )}
                >
                  {children}
                </div>
              </div>
            </div>
          )}
          {inset && (
            <div className="before:skeui-nm-inside-shadow before:skeui-rounded before:skeui-block before:skeui-absolute before:skeui-inset-0 before:skeui-content-[''] skeui-inline-block skeui-size-full skeui-relative">
              <div className={cn("skeui-size-full skeui-p-2 skeui-rounded")}>
                {children}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};
