import { useCallback, useState } from "react";

type ButtonEventHandlers = {
  onBlur: React.FocusEventHandler;
  onMouseEnter: React.MouseEventHandler;
  onMouseLeave: React.MouseEventHandler;
};

export function useIsButtonHover(): [boolean, ButtonEventHandlers] {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = useCallback(() => setIsHover(true), []);
  const handleMouseLeave = useCallback(() => setIsHover(false), []);
  const handleBlur = useCallback(() => setIsHover(false), []);

  return [
    isHover,
    {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onBlur: handleBlur,
    },
  ];
}
