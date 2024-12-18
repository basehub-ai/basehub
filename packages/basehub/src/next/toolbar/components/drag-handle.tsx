import * as React from "react";
import s from "../toolbar.module.scss";

export type DragHandle = { hasDragged: boolean };

export const DragHandle = React.forwardRef(
  (
    {
      onDrag,
      children,
    }: {
      onDrag: ({ x, y }: { x: number; y: number }) => void;
      children: React.ReactNode;
    },
    ref
  ) => {
    const [isDragging, setIsDragging] = React.useState(false);
    const initialPointer = React.useRef({ x: 0, y: 0 });
    const initialToolbar = React.useRef({ x: 0, y: 0 });
    const hasDragged = React.useRef(false);

    React.useImperativeHandle(ref, () => ({
      hasDragged: hasDragged.current,
    }));

    const handleDrag = React.useCallback(
      (e: PointerEvent) => {
        if (!isDragging) return;

        const deltaX = e.clientX - initialPointer.current.x;
        const deltaY = e.clientY - initialPointer.current.y;
        const newToolbarX = initialToolbar.current.x + deltaX;
        const newToolbarY = initialToolbar.current.y + deltaY;

        // set hasDragged to true if the pointer has moved more than 5 px from the initial position
        if (Math.abs(deltaX) > 2 || Math.abs(deltaY) > 2) {
          hasDragged.current = true;
        }

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
      if (!isDragging) {
        hasDragged.current = false;
        return;
      }

      const handlePointerUp = () => {
        setIsDragging(false);
      };

      window.addEventListener("pointerup", handlePointerUp);

      return () => {
        window.removeEventListener("pointerup", handlePointerUp);
      };
    }, [isDragging]);

    return (
      <span
        draggable
        className={`${s.dragHandle} ${isDragging ? s.dragging : ""}`}
        onPointerDown={(e) => {
          if (
            e.target instanceof HTMLElement &&
            (e.target.nodeName.toLowerCase() === "select" ||
              e.target.closest("select"))
          ) {
            // prevent weird safari bug where pointerdown is fired on the select element
            return;
          }
          const handle = e.currentTarget as HTMLSpanElement | null;
          if (!handle) return;
          e.stopPropagation();
          e.preventDefault();
          initialPointer.current = { x: e.clientX, y: e.clientY };
          const rect = handle.getBoundingClientRect();
          initialToolbar.current.x = rect.left;
          initialToolbar.current.y = rect.top;
          setIsDragging(true);
        }}
        onPointerUp={() => {
          setIsDragging(false);
        }}
      >
        {children}
      </span>
    );
  }
);
