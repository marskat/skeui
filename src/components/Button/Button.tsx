import { GlassPanel } from "../GlassPanel/GlassPanel";
export type ButtonProps = React.ComponentProps<"button">;
export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <div className="ui">
      <GlassPanel
        overallClassName="ui-size-fit"
        className="hover:ui-scale-105"
        rounded={["l-full", "r-full"]}
      >
        <button className="ui-px-5 ui-py-3" {...props}>
          {children}
        </button>
      </GlassPanel>
    </div>
  );
};
