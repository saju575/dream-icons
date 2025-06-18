import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArcBy3XPIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 17 17"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M8.168 14.125a6.647 6.647 0 0 1-6.65-6.65 6.647 6.647 0 0 1 6.65-6.65 6.647 6.647 0 0 1 6.65 6.65"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M16.168 6.125H13.45v2.717h2.717zM9.525 12.767H6.81v2.717h2.716zM4.992 1.275H2.275v2.717h2.717z"
    />
  </svg>
);
export default SvgArcBy3XPIcon;
