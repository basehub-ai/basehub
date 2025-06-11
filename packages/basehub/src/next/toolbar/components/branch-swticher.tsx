import * as React from "react"; // important line, don't remove, as we need react to be in context.
// @ts-ignore
import s from "../toolbar.module.scss";
import { Tooltip } from "./tooltip.js";

export type LatestBranch = {
  name: string;
  isDefault: boolean;
};

export const BranchSwitcher = ({
  isForcedDraft,
  draft,
  apiRref,
  latestBranches,
  onRefChange,
  getAndSetLatestBranches,
}: {
  isForcedDraft: boolean;
  draft: boolean;
  apiRref: string;
  latestBranches: LatestBranch[];
  onRefChange: (ref: string, opts: { enableDraftMode: boolean }) => void;
  getAndSetLatestBranches: () => Promise<void>;
}) => {
  const shadowRef = React.useRef<HTMLSpanElement>(null);
  const selectRef = React.useRef<HTMLSelectElement>(null);

  const sortedLatestBranches = React.useMemo(() => {
    return [...latestBranches].sort((a, b) => {
      if (a.isDefault) return -1;
      if (b.isDefault) return 1;
      return a.name.localeCompare(b.name);
    });
  }, [latestBranches]);

  const refOptions = React.useMemo(() => {
    const options = new Set(sortedLatestBranches.map((branch) => branch.name));
    options.add(apiRref);
    return Array.from(options);
  }, [sortedLatestBranches, apiRref]);

  const [refetchLatestBranches, setRefetchLatestBranches] =
    React.useState(false);

  React.useEffect(() => {
    if (refetchLatestBranches) {
      getAndSetLatestBranches().then(() => {
        setRefetchLatestBranches(false);
      });
    }
  }, [refetchLatestBranches, getAndSetLatestBranches]);

  React.useEffect(() => {
    const shadow = shadowRef.current;
    const select = selectRef.current;

    if (!shadow || !select) return;

    const updateSelectWidth = () => {
      const width = shadow.offsetWidth;
      select.style.width = `${width + 20}px`;
    };

    updateSelectWidth();
    window.addEventListener("resize", updateSelectWidth);

    return () => {
      window.removeEventListener("resize", updateSelectWidth);
      if (select) {
        select.style.removeProperty("width");
      }
    };
  }, [apiRref]);

  const isDraftActive = isForcedDraft || draft;

  return (
    <div
      className={s.branch}
      data-draft-active={isDraftActive}
      onMouseEnter={() => {
        setRefetchLatestBranches(true);
      }}
    >
      <BranchIcon />
      &nbsp;
      <Tooltip
        content={
          !isDraftActive
            ? "Switch branch and enter draft mode"
            : "Switch branch"
        }
      >
        <select
          ref={selectRef}
          value={apiRref}
          onChange={(e) =>
            onRefChange(e.target.value, { enableDraftMode: !isDraftActive })
          }
          className={s.branchSelect}
          onMouseDown={(e) => {
            e.stopPropagation();
          }}
          onClick={(e) => {
            e.stopPropagation();
            setRefetchLatestBranches(true);
          }}
        >
          {refOptions.map((r) => {
            return (
              <option key={r} value={r}>
                {r}
              </option>
            );
          })}
        </select>
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={s.branchSelectIcon}
        >
          <path
            d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      </Tooltip>
      <span
        className={s.branchSelect}
        style={{
          visibility: "hidden",
          opacity: 0,
          pointerEvents: "none",
          position: "absolute",
          top: 0,
          left: 0,
        }}
        aria-hidden="true"
        ref={shadowRef}
      >
        {apiRref}
      </span>
    </div>
  );
};

const BranchIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none">
      <path
        fill="#F3F3F3"
        fillRule="evenodd"
        d="M12.765 5.365a1.25 1.25 0 1 0 .002-2.502 1.25 1.25 0 0 0-.002 2.502Zm0 1.063a2.315 2.315 0 1 0-2.315-2.313 2.315 2.315 0 0 0 2.316 2.313ZM5.234 15.137a1.25 1.25 0 1 0 .001-2.501 1.25 1.25 0 0 0 0 2.501Zm0 1.064a2.315 2.315 0 1 0-2.316-2.314 2.315 2.315 0 0 0 2.316 2.314Z"
        clipRule="evenodd"
      />
      <path
        fill="#F3F3F3"
        fillRule="evenodd"
        d="M5.767 8.98v3.648H4.702V8.98h1.065ZM13.298 5.798v2.694h-1.065V5.798h1.065Z"
        clipRule="evenodd"
      />
      <path
        fill="#F3F3F3"
        fillRule="evenodd"
        d="M13.298 8.448a.532.532 0 0 1-.533.532H5.29a.532.532 0 1 1 0-1.064h7.476c.294 0 .533.238.533.532ZM5.234 2.864a1.25 1.25 0 1 1 .001 2.502 1.25 1.25 0 0 1 0-2.502Zm0-1.063a2.315 2.315 0 1 1-2.316 2.314A2.315 2.315 0 0 1 5.234 1.8Z"
        clipRule="evenodd"
      />
      <path
        fill="#F3F3F3"
        fillRule="evenodd"
        d="M5.767 9.022V5.374H4.702v3.648h1.065Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
