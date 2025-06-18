import type { SVGProps } from "react";
import React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const CirclePlusIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 34 32"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.817 10.666v10.667m5.607-5.334H11.21"
    />
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M30.837 16c0-7.364-6.275-13.334-14.016-13.334S2.805 8.636 2.805 15.999 9.08 29.333 16.82 29.333s14.016-5.97 14.016-13.334Z"
    />
  </svg>
);
export default CirclePlusIcon;
