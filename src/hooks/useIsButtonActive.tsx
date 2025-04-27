import { useCallback, useState } from "react";

type UseIsButtonActiveReturn = [
  boolean,
  {
    onPointerDown: React.PointerEventHandler;
    onPointerUp: React.PointerEventHandler;
    onPointerLeave: React.PointerEventHandler;
    onKeyDown: React.KeyboardEventHandler;
    onKeyUp: React.KeyboardEventHandler;
  }
];

export function useIsButtonActive(): UseIsButtonActiveReturn {
  const [isActive, setIsActive] = useState(false);

  const onPointerDown = useCallback(() => setIsActive(true), []);
  const onPointerUp = useCallback(() => setIsActive(false), []);
  const onPointerLeave = useCallback(() => setIsActive(false), []);
  const onKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === " " || e.key === "Enter") setIsActive(true);
  }, []);
  const onKeyUp = useCallback((e: React.KeyboardEvent) => {
    if (e.key === " " || e.key === "Enter") setIsActive(false);
  }, []);

  return [
    isActive,
    { onPointerDown, onPointerUp, onPointerLeave, onKeyDown, onKeyUp },
  ];
}
