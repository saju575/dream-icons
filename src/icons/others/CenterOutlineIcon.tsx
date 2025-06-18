import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const CenterOutlineIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 10 10"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.625}
      d="M3.75 1.667v1.25c0 .46-.373.833-.833.833h-1.25M6.25 8.333v-1.25c0-.46.373-.833.833-.833h1.25M8.334 3.75h-1.25a.833.833 0 0 1-.834-.833v-1.25M1.667 6.25h1.25c.46 0 .833.373.833.833v1.25"
    />
  </svg>
);
export default CenterOutlineIcon;
