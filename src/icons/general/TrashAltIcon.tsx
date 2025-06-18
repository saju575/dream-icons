import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const TrashAltIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 19 20"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="m2.408 6.715 1.488 9.888A2.816 2.816 0 0 0 6.68 19h5.365c1.376 0 2.55-.994 2.777-2.35l1.665-9.935M5.945 8.41l.686 7.222M9.443 8.41l.005 7.222M13.085 8.41l-.821 7.222M1 3.9l16.895-.006M6.512 2.465s2.61-3.296 5.863 0"
    />
  </svg>
);
export default TrashAltIcon;
