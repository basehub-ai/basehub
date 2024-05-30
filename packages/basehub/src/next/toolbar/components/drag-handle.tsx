import * as React from "react";
import s from "../toolbar.module.scss";

export const DragHandle = ({
  onDrag,
  onDragStart,
  onDragEnd,
  children,
}: {
  onDrag: ({ x, y }: { x: number; y: number }) => void;
  onDragStart: () => void;
  onDragEnd: () => void;
  children: React.ReactNode;
}) => {
  const [isDragging, setIsDragging] = React.useState(false);
  const initialPointer = React.useRef({ x: 0, y: 0 });
  const initialToolbar = React.useRef({ x: 0, y: 0 });

  const handleDrag = React.useCallback(
    (e: PointerEvent) => {
      if (!isDragging) return;

      const deltaX = e.clientX - initialPointer.current.x;
      const deltaY = e.clientY - initialPointer.current.y;
      const newToolbarX = initialToolbar.current.x + deltaX;
      const newToolbarY = initialToolbar.current.y + deltaY;

      onDrag({ x: newToolbarX, y: newToolbarY });
    },
    [isDragging, onDrag]
  );

  React.useLayoutEffect(() => {
    if (!isDragging) return;

    window.addEventListener("pointermove", handleDrag);

    return () => {
      window.removeEventListener("pointermove", handleDrag);
    };
  }, [isDragging, onDrag, handleDrag]);

  React.useLayoutEffect(() => {
    // disable drag on pointer up
    if (!isDragging) return;

    const handlePointerUp = () => {
      setIsDragging(false);
      onDragEnd();
    };

    window.addEventListener("pointerup", handlePointerUp);

    return () => {
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [isDragging, onDragEnd]);

  return (
    <span
      className={`${s.dragHandle} ${isDragging ? s.dragging : ""}`}
      onPointerDown={(e) => {
        e.stopPropagation();
        const handle = e.currentTarget as HTMLSpanElement | null;
        if (!handle) return;
        initialPointer.current = { x: e.clientX, y: e.clientY };
        const rect = handle.getBoundingClientRect();
        initialToolbar.current.x = rect.left;
        initialToolbar.current.y = rect.top;
        setIsDragging(true);
        onDragStart();
      }}
      onPointerUp={() => {
        setIsDragging(false);
        if (isDragging) {
          onDragEnd();
        }
      }}
    >
      {children}
    </span>
  );
};
