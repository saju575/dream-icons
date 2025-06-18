import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSweepIcon = ({
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
      d="M11 14.667H4.89c-2.423 0-4.39-2.05-4.39-4.581 0-1.264.492-2.413 1.288-3.24A4.28 4.28 0 0 1 4.891 5.5H11"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5.75 1.334h5.673c2.25 0 4.077 1.863 4.077 4.164a4.2 4.2 0 0 1-1.196 2.946 4 4 0 0 1-2.881 1.223H5.75"
    />
  </svg>
);
export default SvgSweepIcon;
