import s from "../toolbar.module.scss";

export const BranchSwitcher = ({
  isDev,
  draft,
}: {
  isDev: boolean;
  draft: boolean;
}) => {
  return (
    <div className={s.branch} data-draft-active={isDev || draft}>
      <BranchIcon />
      &nbsp;main
    </div>
  );
};

const BranchIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
      <path
        fill="#F3F3F3"
        fillRule="evenodd"
        d="M14.184 5.96a1.39 1.39 0 1 0 .001-2.78 1.39 1.39 0 0 0 0 2.78Zm0 1.182a2.572 2.572 0 1 0-2.573-2.571c0 1.42 1.152 2.57 2.573 2.57ZM5.816 16.818a1.39 1.39 0 1 0 .001-2.779 1.39 1.39 0 0 0-.001 2.78Zm0 1.182a2.572 2.572 0 1 0-2.573-2.57c0 1.42 1.152 2.57 2.573 2.57Z"
        clipRule="evenodd"
      />
      <path
        fill="#F3F3F3"
        fillRule="evenodd"
        d="M6.407 9.977v4.053H5.225V9.977h1.182ZM14.775 6.442v2.993h-1.182V6.442h1.182Z"
        clipRule="evenodd"
      />
      <path
        fill="#F3F3F3"
        fillRule="evenodd"
        d="M14.775 9.386c0 .326-.264.59-.59.59H5.876a.591.591 0 1 1 0-1.181h8.307c.327 0 .591.264.591.59ZM5.816 3.182a1.39 1.39 0 1 1 .001 2.78 1.39 1.39 0 0 1-.001-2.78Zm0-1.182a2.572 2.572 0 1 1-2.573 2.571c0-1.42 1.152-2.57 2.573-2.57Z"
        clipRule="evenodd"
      />
      <path
        fill="#F3F3F3"
        fillRule="evenodd"
        d="M6.407 10.024V5.97H5.225v4.054h1.182Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
