"use client";
import * as React from "react";
import { sendEvent, getEventCount } from "basehub/analytics";

export const Counter = ({ _analyticsKey }: { _analyticsKey: string }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    getEventCount({ _analyticsKey, name: "page_view" }).then((count) => {
      setCount(count);
    });
  }, [_analyticsKey]);

  return (
    <div>
      <button
        onClick={() => {
          sendEvent({ _analyticsKey, name: "page_view" });
          setCount((prev) => prev + 1);
        }}
      >
        Count {count}
      </button>
    </div>
  );
};
