import * as React from "react"; // important line, don't remove, as we need react to be in context.
import s from "../toolbar.module.scss";
import { Tooltip } from "./tooltip";

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
  onRefChange: (ref: string) => void;
  getAndSetLatestBranches: () => Promise<void>;
}) => {
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

  return (
    <div
      className={s.branch}
      data-draft-active={isForcedDraft || draft}
      onMouseEnter={() => {
        setRefetchLatestBranches(true);
      }}
    >
      <BranchIcon />
      &nbsp;
      <Tooltip
        content={draft ? "Enable draft mode to switch branch" : "Switch branch"}
      >
        <select
          value={apiRref}
          onChange={(e) => onRefChange(e.target.value)}
          className={s.branchSelect}
          onClick={() => {
            setRefetchLatestBranches(true);
          }}
          disabled={draft}
        >
          {refOptions.map((r) => {
            return (
              <option key={r} value={r}>
                {r}
              </option>
            );
          })}
        </select>
      </Tooltip>
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
