import { useCallback, useState } from "react";

type ButtonEventHandlers = {
  onPointerDown: React.PointerEventHandler;
  onPointerUp: React.PointerEventHandler;
  onPointerLeave: React.PointerEventHandler;
  onKeyDown: React.KeyboardEventHandler;
  onKeyUp: React.KeyboardEventHandler;
  onBlur: React.FocusEventHandler;
};

export function useIsButtonActive(): [boolean, ButtonEventHandlers] {
  const [isActive, setIsActive] = useState(false);

  const handlePointerDown = useCallback(() => setIsActive(true), []);
  const handlePointerUp = useCallback(() => setIsActive(false), []);
  const handlePointerLeave = useCallback(() => setIsActive(false), []);
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === " " || e.key === "Enter") setIsActive(true);
  }, []);
  const handleKeyUp = useCallback((e: React.KeyboardEvent) => {
    if (e.key === " " || e.key === "Enter") setIsActive(false);
  }, []);
  const handleBlur = useCallback(() => setIsActive(false), []);

  return [
    isActive,
    {
      onPointerDown: handlePointerDown,
      onPointerUp: handlePointerUp,
      onPointerLeave: handlePointerLeave,
      onKeyDown: handleKeyDown,
      onKeyUp: handleKeyUp,
      onBlur: handleBlur,
    },
  ];
}
