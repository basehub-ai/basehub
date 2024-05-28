import s from "../toolbar.module.scss";

export const DraftButton = ({
  isDev,
  draft,
  loading,
  onClick,
}: {
  isDev: boolean;
  draft: boolean;
  loading: boolean;
  onClick: JSX.IntrinsicElements["button"]["onClick"];
}) => (
  <button
    className={s.draft}
    data-active={isDev || draft}
    data-loading={loading}
    disabled={isDev}
    onClick={onClick}
  >
    <EyeIcon />
  </button>
);

const EyeIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.462 10c1.91 2.83 4.942 4.667 8.538 4.667s6.627-1.838 8.538-4.667C16.628 7.17 13.596 5.333 10 5.333S3.373 7.171 1.462 10Zm-1.36-.353C2.208 6.275 5.743 4 10 4c4.256 0 7.791 2.275 9.899 5.647a.667.667 0 0 1 0 .706C17.79 13.725 14.256 16 10 16c-4.256 0-7.791-2.275-9.899-5.647a.667.667 0 0 1 0-.706Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M12.667 10a2.667 2.667 0 1 1-5.334 0 2.667 2.667 0 0 1 5.334 0Z"
      />
    </svg>
  );
};
