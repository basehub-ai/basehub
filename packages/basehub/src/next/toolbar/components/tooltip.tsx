import * as React from "react";
import debounce from "lodash.debounce";
import s from "../toolbar.module.scss";

export type Tooltip = { checkOverflow: () => void };

export const Tooltip = React.forwardRef(
  (
    {
      children,
      content,
      disabled,
      forceVisible,
    }: {
      content: string;
      children: React.ReactNode;
      disabled?: boolean;
      forceVisible?: boolean;
    },
    ref
  ) => {
    const tooltipContentRef = React.useRef<HTMLParagraphElement>(null);

    const checkOverflow = React.useCallback(
      debounce(() => {
        if (tooltipContentRef.current) {
          const rect = tooltipContentRef.current.getBoundingClientRect();

          // reached the top
          if (rect.top < 0 || rect.top > window.innerHeight) {
            tooltipContentRef.current.classList.remove(s.bottom);
            tooltipContentRef.current.classList.add(s.top);
          } else {
            tooltipContentRef.current.classList.remove(s.top);
            tooltipContentRef.current.classList.add(s.bottom);
          }

          // reached the right
          if (rect.left < 0 || rect.right > window.innerWidth) {
            tooltipContentRef.current.classList.remove(s.left);
            tooltipContentRef.current.classList.add(s.right);
          } else {
            tooltipContentRef.current.classList.remove(s.right);
            tooltipContentRef.current.classList.add(s.left);
          }
        }
      }, 200),
      []
    );

    React.useEffect(() => {
      checkOverflow();

      window.addEventListener("resize", checkOverflow);

      return () => {
        window.removeEventListener("resize", checkOverflow);
      };
    }, [checkOverflow]);

    React.useImperativeHandle(
      ref,
      () => ({
        checkOverflow,
      }),
      [checkOverflow]
    );

    return (
      <div className={s.tooltipWrapper} data-disabled={disabled}>
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
