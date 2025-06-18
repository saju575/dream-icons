import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFolderIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 22 20"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 5h9.75c2.107 0 3.16 0 3.917.506.327.219.608.5.827.827C21 7.09 21 8.143 21 10.25c0 3.511 0 5.267-.843 6.528a5 5 0 0 1-1.38 1.38C17.518 19 15.762 19 12.25 19H11c-4.714 0-7.071 0-8.536-1.465C1 16.072 1 13.715 1 9V5.944c0-1.816 0-2.724.38-3.406A3 3 0 0 1 2.538 1.38C3.22 1 4.128 1 5.944 1 7.108 1 7.69 1 8.2 1.191c1.163.436 1.643 1.493 2.168 2.542L11 5"
    />
  </svg>
);
export default SvgFolderIcon;
