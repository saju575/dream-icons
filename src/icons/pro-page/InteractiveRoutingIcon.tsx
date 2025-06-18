import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgInteractiveRoutingIcon = ({
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
    <circle cx={12.166} cy={13} r={2.5} stroke="currentColor" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M5.717 2.9c1.042 0 1.887.844 1.887 1.886v6.257A1.96 1.96 0 0 0 9.667 13v0"
    />
    <circle cx={3.166} cy={3} r={2.5} stroke="currentColor" />
  </svg>
);
export default SvgInteractiveRoutingIcon;
