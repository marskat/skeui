import { useIsButtonActive } from "../../hooks/useIsButtonActive";
import { GlassPanel } from "../GlassPanel/GlassPanel";
export type GlassButtonProps = React.ComponentProps<"button"> & {
  neumorphic?: boolean;
};
export const GlassButton = ({
  children,
  neumorphic = false,
  ...props
}: GlassButtonProps) => {
  const [isActive, eventHandlers] = useIsButtonActive();
  return (
    <div className="ui">
      <GlassPanel
        overallClassName="ui-size-fit"
        className="hover:ui-scale-105"
        rounded={["l-full", "r-full"]}
        neumorphic={!neumorphic ? false : !isActive}
        // neumorphic={isActive && neumorphic ? false : true}
      >
        <button className="ui-px-5 ui-py-3" {...props} {...eventHandlers}>
          {children}
        </button>
      </GlassPanel>
    </div>
  );
};
