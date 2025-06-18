import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const FolderProtectedIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 29 28"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7.833 6.667h13c2.81 0 4.214 0 5.223.675.436.291.811.666 1.103 1.102.556.832.653 1.704.67 3.556M14.5 6.667l-.844-1.69c-.7-1.4-1.34-2.807-2.89-3.389-.68-.255-1.455-.255-3.007-.255-2.422 0-3.632 0-4.542.507a4 4 0 0 0-1.544 1.544c-.506.91-.506 2.12-.506 4.542V12c0 6.285 0 9.428 1.952 11.38 1.81 1.812 4.64 1.944 10.048 1.954m8.666-10.667c-1.901 0-3.133 1.212-4.589 1.653-.592.179-.888.27-1.008.396-.12.127-.155.31-.225.68-.751 3.959.89 7.618 4.806 9.04.42.155.631.23 1.018.23.386 0 .596-.075 1.017-.229 3.915-1.424 5.555-5.082 4.804-9.04-.07-.37-.107-.555-.225-.68-.119-.126-.416-.218-1.008-.397-1.458-.441-2.69-1.653-4.59-1.653"
    />
  </svg>
);
export default FolderProtectedIcon;
