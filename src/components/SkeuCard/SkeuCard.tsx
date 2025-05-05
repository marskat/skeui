import cn from "classnames";

const aesthetics = ["glassmorphic", "neumorphic"] as const;
export type Aesthetic = (typeof aesthetics)[number];

export type SkeuCardProps = React.ComponentProps<"div"> & {
  aesthetic?: Aesthetic;
  inset?: boolean;
};
/**
 * A skeumorphic card component.
 *
 * Wrap any element in this component to render it on the card.
 *
 * @property {Aesthetic} [aesthetic] - [Optional] Skeumorphic styling. Choices are `glassmorphic` and `neumorphic`.  Default is `glassmorphic`.
 *
 * This type extends all standard HTML `<div>` element attributes.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div
 */
export const SkeuCard = ({
  children,
  className,
  inset = false,
  aesthetic = "glassmorphic",
  ...props
}: SkeuCardProps) => {
  return (
    <div className="ui">
      {aesthetic === "glassmorphic" && (
        <div
          className={cn(
            "ui-backdrop-blur-2xl ui-soft-transition ui-gp-inside-shadow ui-size-full ui-relative",
            className
          )}
          {...props}
        >
          {children}
          <div
            className={cn(
              "ui-size-full ui-absolute ui-top-0 ui-left-0 ui-mt-0.5 ui-ml-0.5 ui-opacity-10",
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
                "before:ui-nm-outside-highlight before:ui-rounded-t before:ui-rounded-b before:ui-block before:ui-absolute before:ui-inset-0 before:ui-content-[''] ui-inline-block ui-size-full ui-relative"
              )}
            >
              <div
                className={cn(
                  "before:ui-nm-outside-shadow before:ui-rounded-t before:ui-rounded-b before:ui-block before:ui-absolute before:ui-inset-0 before:ui-content-[''] ui-inline-block ui-size-full ui-relative"
                )}
              >
                <div
                  className={cn(
                    "ui-size-full ui-p-2 ui-rounded ui-rounded-t ui-rounded-b"
                  )}
                >
                  {children}
                </div>
              </div>
            </div>
          )}
          {inset && (
            <div className="before:ui-nm-inside-shadow before:ui-rounded before:ui-block before:ui-absolute before:ui-inset-0 before:ui-content-[''] ui-inline-block ui-size-full ui-relative">
              <div className={cn("ui-size-full ui-p-2 ui-rounded")}>
                {children}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};
