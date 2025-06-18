import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SelectVisiblePartIcon = ({
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
      d="M4.366 11.675h-1.3a2.497 2.497 0 0 1-2.5-2.5V3.058c0-1.383 1.117-2.5 2.5-2.5h6.117c1.383 0 2.5 1.117 2.5 2.5v1.067"
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      d="M13.583 8.791 8.79 13.583 7.199 7.2z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m11.191 11.191 4.25 4.25"
    />
  </svg>
);
export default SelectVisiblePartIcon;
