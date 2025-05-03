import cn from "classnames";
import { useIsButtonActive } from "../../hooks/useIsButtonActive";
import { useIsButtonHover } from "../../hooks/useIsButtonHover";

export type NeuButtonProps = React.ComponentProps<"button">;

/**
 * A neumorphic button component.
 *
 * Wrap any element in this component to render it on the button.
 *
 * This type extends all standard HTML <button> element attributes.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button
 */
export const NeuButton = ({
  children,
  className,
  ...props
}: NeuButtonProps) => {
  const [isActive, eventHandlers] = useIsButtonActive();
  const [isHover, hoverEventHandlers] = useIsButtonHover();

  return (
    <div className="ui">
      <div
        className={cn(
          !isActive ? "before:ui-nm-outside-highlight" : "",
          "before:ui-rounded-full before:ui-block before:ui-absolute before:ui-inset-0 before:ui-content-[''] ui-inline-block ui-size-fit ui-relative ui-pointer-events-none"
        )}
      >
        <div
          className={cn(
            isActive
              ? "before:ui-nm-inside-shadow"
              : "before:ui-nm-outside-shadow",
            "before:ui-rounded-full before:ui-block before:ui-absolute before:ui-inset-0 before:ui-content-[''] before:ui-z-10",
            "ui-inline-block ui-size-fit ui-relative ui-pointer-events-none"
          )}
        >
          <button
            {...props}
            {...eventHandlers}
            {...hoverEventHandlers}
            className={cn(
              "ui-size-fit ui-p-2 ui-rounded-full ui-cursor-pointer ui-pointer-events-auto ui-relative ui-z-0",
              { "ui-brightness-95": isHover }, // TODO: use isHover to do better styling
              className
            )}
          >
            {children}
          </button>
        </div>
      </div>
    </div>
  );
};
