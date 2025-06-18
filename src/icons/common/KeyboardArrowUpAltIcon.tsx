import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const KeyboardArrowUpAltIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 11"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="m9.844 3.506-7.039 6.99c-.525.52-1.376.52-1.9 0a1.325 1.325 0 0 1 0-1.885L8.892.678a1.353 1.353 0 0 1 1.901 0l7.99 7.933c.524.52.524 1.365 0 1.885-.526.52-1.377.52-1.902 0z"
    />
  </svg>
);
export default KeyboardArrowUpAltIcon;
