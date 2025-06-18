import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const AddImageIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 22 22"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M16.05 1.94H5.94a4 4 0 0 0-4 4v10.11a4 4 0 0 0 4 4h10.11a4 4 0 0 0 4-4V5.94a4 4 0 0 0-4-4Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m1.959 16.71 4.99-3.58 3.42 6.93 4.67-9.52 4.93 6.32"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M8.849 5.5h-2.12a1 1 0 0 0-1 1v2.12a1 1 0 0 0 1 1h2.12a1 1 0 0 0 1-1V6.5a1 1 0 0 0-1-1Z"
    />
  </svg>
);
export default AddImageIcon;
