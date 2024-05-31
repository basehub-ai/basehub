import * as React from "react";
import debounce from "lodash.debounce";
import s from "../toolbar.module.scss";

export type Tooltip = { checkOverflow: () => void };

export const Tooltip = React.forwardRef(
  (
    {
      children,
      content,
      forceVisible,
    }: {
      content: string;
      children: React.ReactNode;
      forceVisible?: boolean;
    },
    ref
  ) => {
    const tooltipContentRef = React.useRef<HTMLParagraphElement>(null);

    const checkOverflow = React.useCallback(
      debounce(() => {
        if (tooltipContentRef.current) {
          const rect = tooltipContentRef.current.getBoundingClientRect();
          const paddingInline = tooltipContentRef.current.classList.contains(
            s.left
          )
            ? 0
            : rect.width / 2;
          const paddingBlock = rect.height;
          const tooltipOffset = 40 * 2;
          const isAlreadyToTop = tooltipContentRef.current.classList.contains(
            s.bottom
          );

          // reached the top
          if (
            (isAlreadyToTop
              ? rect.top
              : rect.top - tooltipOffset - paddingBlock) <= 0
          ) {
            tooltipContentRef.current.classList.remove(s.bottom);
            tooltipContentRef.current.classList.add(s.top);
          } else {
            tooltipContentRef.current.classList.remove(s.top);
            tooltipContentRef.current.classList.add(s.bottom);
          }

          // reached the right
          if (rect.right + paddingInline > window.innerWidth) {
            tooltipContentRef.current.classList.remove(s.left);
            tooltipContentRef.current.classList.add(s.right);
          } else {
            tooltipContentRef.current.classList.remove(s.right);
            tooltipContentRef.current.classList.add(s.left);
          }
        }
      }, 100),
      []
    );

    React.useEffect(() => {
      checkOverflow();

      window.addEventListener("resize", checkOverflow);

      return () => {
        window.removeEventListener("resize", checkOverflow);
      };
    }, [checkOverflow]);

    React.useImperativeHandle(ref, () => ({ checkOverflow }), [checkOverflow]);

    return (
      <div className={s.tooltipWrapper}>
        <p
          ref={tooltipContentRef}
          className={
            forceVisible
              ? `${s.tooltip} ${s.bottom} ${s.left} ${s.forceVisible}`
              : `${s.tooltip} ${s.bottom} ${s.left}`
          }
        >
          {content}
        </p>
        {children}
      </div>
    );
  }
);
