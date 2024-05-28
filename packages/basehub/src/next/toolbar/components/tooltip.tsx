import * as React from "react";
import s from "../toolbar.module.scss";

export type Tooltip = { checkOverflow: () => void };

export const Tooltip = React.forwardRef(
  (
    {
      children,
      content,
      disabled
    }: {
      content: string;
      children: React.ReactNode;
      disabled?: boolean
    },
    ref
  ) => {
    const tooltipContentRef = React.useRef<HTMLParagraphElement>(null);

    const checkOverflow = React.useCallback(() => {
      if (tooltipContentRef.current) {
        const rect = tooltipContentRef.current.getBoundingClientRect();

        // reached the top
        if (rect.top < 0) {
          tooltipContentRef.current.classList.remove(s.bottom);
          tooltipContentRef.current.classList.add(s.top);
        }

        // reached the left
        if (rect.left < 0) {
          tooltipContentRef.current.classList.remove(s.right);
          tooltipContentRef.current.classList.add(s.left);
        }

        // reached the right
        if (rect.right > window.innerWidth) {
          tooltipContentRef.current.classList.remove(s.left);
          tooltipContentRef.current.classList.add(s.right);
        }

        // reached the bottom
        if (rect.bottom > window.innerHeight) {
          tooltipContentRef.current.classList.remove(s.top);
          tooltipContentRef.current.classList.add(s.bottom);
        }
      }
    }, []);

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
        <p ref={tooltipContentRef} className={s.tooltip}>
          {content}
        </p>
        {children}
      </div>
    );
  }
);
