import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const ArrowUpDownIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.833 1.333v13.334m0-13.334c.659 0 2.5 2.5 2.5 2.5m-2.5-2.5c-.658 0-2.5 2.5-2.5 2.5m10.834 10v-12.5m2.5 10.834s-1.842 2.5-2.5 2.5c-.659 0-2.5-2.5-2.5-2.5"
    />
  </svg>
);
export default ArrowUpDownIcon;
