import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const KeyboardArrowDownAltIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 14 8"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M7 5.536 12.279.293a1.014 1.014 0 0 1 1.426 0 .994.994 0 0 1 0 1.414l-5.992 5.95c-.394.39-1.032.39-1.426 0L.295 1.707a.994.994 0 0 1 0-1.414 1.014 1.014 0 0 1 1.426 0z"
    />
  </svg>
);
export default KeyboardArrowDownAltIcon;
