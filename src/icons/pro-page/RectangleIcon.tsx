import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRectangleIcon = ({
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
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.2}
      d="M13.192 1.467H4.8A3.333 3.333 0 0 0 1.467 4.8v8.392A3.333 3.333 0 0 0 4.8 16.525h8.392a3.333 3.333 0 0 0 3.333-3.333V4.8a3.333 3.333 0 0 0-3.333-3.333Z"
    />
  </svg>
);
export default SvgRectangleIcon;
