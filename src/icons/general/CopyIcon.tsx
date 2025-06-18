import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const CopyIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 20"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.95 1.02H4.02a3 3 0 0 0-3 3v6.93a3 3 0 0 0 3 3h6.93a3 3 0 0 0 3-3V4.02a3 3 0 0 0-3-3"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15.97 6.04H9.04a3 3 0 0 0-3 3v6.93a3 3 0 0 0 3 3h6.93a3 3 0 0 0 3-3V9.04a3 3 0 0 0-3-3"
    />
  </svg>
);
export default CopyIcon;
