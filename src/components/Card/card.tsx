import cn from "classnames";
export type CardProps = React.ComponentProps<"div"> & {
  neumorphic?: boolean;
  inset?: boolean;
};
export const Card = ({
  children,
  neumorphic = false,
  inset = false,
}: CardProps) => {
  return (
    <div className="ui">
      {neumorphic && !inset && (
        <div
          className={cn(
            "before:ui-nm-outside-highlight before:ui-rounded-t before:ui-rounded-b before:ui-block before:ui-absolute before:ui-inset-0 before:ui-content-[''] ui-inline-block ui-size-fit ui-relative"
          )}
        >
          <div
            className={cn(
              "before:ui-nm-outside-shadow before:ui-rounded-t before:ui-rounded-b before:ui-block before:ui-absolute before:ui-inset-0 before:ui-content-[''] ui-inline-block ui-size-fit ui-relative"
            )}
          >
            <div
              className={cn(
                "ui-size-fit ui-p-2 ui-rounded ui-rounded-t ui-rounded-b"
              )}
            >
              {children}
            </div>
          </div>
        </div>
      )}
      {neumorphic && inset && (
        <div
          className={cn("ui-size-fit ui-p-2 ui-rounded ui-nm-inside-shadow")}
        >
          {children}
        </div>
      )}
    </div>
  );
};
