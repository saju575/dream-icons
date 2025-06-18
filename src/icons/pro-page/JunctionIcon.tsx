import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgJunctionIcon = ({
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
      strokeMiterlimit={10}
      d="M1.305 8.808h15M8.809 1.304v15"
    />
    <path
      fill="currentColor"
      d="M8.809 10.23a1.72 1.72 0 1 0 0-3.443 1.72 1.72 0 0 0 0 3.442"
    />
  </svg>
);
export default SvgJunctionIcon;
