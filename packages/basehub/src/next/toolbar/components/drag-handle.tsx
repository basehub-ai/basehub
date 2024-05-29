import * as React from "react";
import s from "../toolbar.module.scss";

export const DragHandle = ({
  onDrag,
  onDragStart,
  onDragEnd,
}: {
  onDrag: ({ x, y }: { x: number; y: number }) => void;
  onDragStart: () => void;
  onDragEnd: () => void;
}) => {
  const [isDragging, setIsDragging] = React.useState(false);

  React.useLayoutEffect(() => {
    if (!isDragging) return;

    const handleDrag = (e: PointerEvent) => {
      if (!isDragging) return;

      const x = Math.round(e.clientX);
      const y = Math.round(e.clientY);

      onDrag({ x, y });
    };

    window.addEventListener("pointermove", handleDrag);

    return () => {
      window.removeEventListener("pointermove", handleDrag);
    };
  }, [isDragging, onDrag]);

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
    <button
      className={`${s.dragHandle} ${isDragging ? s.dragging : ""}`}
      onPointerDown={() => {
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
      <DragIcon />
    </button>
  );
};

const DragIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
      <path
        fill="#F3F3F3"
        fillRule="evenodd"
        d="M8 1.75a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V2.25a.5.5 0 0 1 .5-.5ZM8 9.5a.5.5 0 0 1 .5.5v3.75a.5.5 0 0 1-1 0V10a.5.5 0 0 1 .5-.5ZM9.5 8a.5.5 0 0 1 .5-.5h3.75a.5.5 0 1 1 0 1H10a.5.5 0 0 1-.5-.5ZM1.75 8a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1H2.25a.5.5 0 0 1-.5-.5Z"
        clipRule="evenodd"
      />
      <path
        fill="#F3F3F3"
        fillRule="evenodd"
        d="M3.818 5.933a.45.45 0 0 1 0 .636L2.386 8.001l1.432 1.432a.45.45 0 0 1-.636.636l-1.75-1.75a.45.45 0 0 1 0-.636l1.75-1.75a.45.45 0 0 1 .636 0ZM5.932 12.183a.45.45 0 0 1 .636 0L8 13.614l1.432-1.431a.45.45 0 1 1 .636.636l-1.75 1.75a.45.45 0 0 1-.636 0l-1.75-1.75a.45.45 0 0 1 0-.636ZM12.182 5.933a.45.45 0 0 1 .636 0l1.75 1.75a.45.45 0 0 1 0 .636l-1.75 1.75a.45.45 0 1 1-.636-.636L13.614 8l-1.432-1.432a.45.45 0 0 1 0-.636ZM7.682 1.433a.45.45 0 0 1 .636 0l1.75 1.75a.45.45 0 1 1-.636.636L8 2.387 6.568 3.82a.45.45 0 1 1-.636-.636l1.75-1.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
