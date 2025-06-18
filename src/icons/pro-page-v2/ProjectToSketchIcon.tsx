import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgProjectToSketchIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 18 18"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M5.475 3.025 11.9 9.45l1.225 3.683-3.683-1.225L1.5 3.967l2.458-2.459zM9.441 11.908l2.45-2.458M3.658 6.125l2.45-2.458"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M14.834 7.308c.916 0 1.666.75 1.666 1.667v5.858c0 .917-.75 1.667-1.666 1.667H8.975c-.916 0-1.666-.75-1.666-1.667"
    />
  </svg>
);
export default SvgProjectToSketchIcon;
