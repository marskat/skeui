import cn from "classnames";
import { useIsButtonActive } from "../../hooks/useIsButtonActive";
import { useIsButtonHover } from "../../hooks/useIsButtonHover";
import { Aesthetic } from "../Card/card";

export type ButtonProps = React.ComponentProps<"button"> & {
  aesthetic?: Aesthetic;
};

// TODO:add glassmorphic and make it default
/**
 * A neumorphic button component.
 *
 * Wrap any element in this component to render it on the button.
 *
 * @property {Aesthetic} [aesthetic] - [Optional] Skeuomorphic styling. Choices are `glassmorphic` and `neumorphic`.  Default is `glassmorphic`.
 *
 * This type extends all standard HTML `<button>` element attributes.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button
 */
export const Button = ({
  children,
  className,
  aesthetic = "neumorphic",
  ...props
}: ButtonProps) => {
  const [isActive, eventHandlers] = useIsButtonActive();
  const [isHover, hoverEventHandlers] = useIsButtonHover();

  return (
    <div className="skeui">
      {aesthetic === "neumorphic" && (
        <div
          className={cn(
            !isActive ? "before:skeui-nm-outside-highlight" : "",
            "before:skeui-rounded-full before:skeui-block before:skeui-absolute before:skeui-inset-0 before:skeui-content-[''] skeui-inline-block skeui-size-fit skeui-relative skeui-pointer-events-none"
          )}
        >
          <div
            className={cn(
              isActive
                ? "before:skeui-nm-inside-shadow"
                : "before:skeui-nm-outside-shadow",
              "before:skeui-rounded-full before:skeui-block before:skeui-absolute before:skeui-inset-0 before:skeui-content-[''] before:skeui-z-10",
              "skeui-inline-block skeui-size-fit skeui-relative skeui-pointer-events-none"
            )}
          >
            <button
              {...props}
              {...eventHandlers}
              {...hoverEventHandlers}
              className={cn(
                "skeui-size-fit skeui-p-2 skeui-rounded-full skeui-cursor-pointer skeui-pointer-events-auto skeui-relative skeui-z-0",
                { "skeui-brightness-95": isHover }, // TODO: use isHover to do better styling
                className
              )}
            >
              {children}
            </button>
          </div>
        </div>
      )}
      {aesthetic === "glassmorphic" && <div></div>}
    </div>
  );
};
