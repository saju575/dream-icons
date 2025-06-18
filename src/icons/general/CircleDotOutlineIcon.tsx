import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const CircleDotOutlineIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 21 20"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <circle
      cx={10.5}
      cy={10}
      r={9}
      stroke="currentColor"
      strokeDasharray="1 9"
      strokeLinecap="round"
      strokeWidth={2}
    />
  </svg>
);
export default CircleDotOutlineIcon;
