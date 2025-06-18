import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgZeroOriginIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 18 18"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M14.816 11.883a6.1 6.1 0 0 0 1.517-4.05A6.1 6.1 0 0 0 15.141 4.2l1.417-2.758-4.783.433a6.4 6.4 0 0 0-1.609-.208A6.16 6.16 0 0 0 4.525 5.35L1.44 5.5l2.767 3.942a6.18 6.18 0 0 0 5.967 4.566c.225 0 .45-.016.666-.041l1.675 2.6 2.034-4.384c.091-.091.183-.191.275-.291z"
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M10.167 10.758a2.925 2.925 0 1 0 0-5.85 2.925 2.925 0 0 0 0 5.85Z"
    />
  </svg>
);
export default SvgZeroOriginIcon;
