import cn from "classnames";

export type GlassCardProps = React.ComponentProps<"div">;
export const GlassCard = ({
  children,
  className,
  ...props
}: GlassCardProps) => {
  return (
    <div className="ui">
      <div
        className={cn(
          "ui-backdrop-blur-2xl ui-soft-transition ui-gp-inside-shadow ui-size-fit ui-relative",
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
    </div>
  );
};
