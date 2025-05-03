import cn from "classnames";
export type NeuCardProps = React.ComponentProps<"div"> & {
  inset?: boolean;
};
export const NeuCard = ({ children, inset = false }: NeuCardProps) => {
  return (
    <div className="ui">
      {!inset && (
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
      {inset && (
        <div
          className={cn("ui-size-fit ui-p-2 ui-rounded ui-nm-inside-shadow")}
        >
          {children}
        </div>
      )}
    </div>
  );
};
