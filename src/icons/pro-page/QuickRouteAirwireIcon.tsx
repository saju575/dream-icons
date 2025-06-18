import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgQuickRouteAirwireIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 8"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M2.957 6.263h2.122M6.637 6.263h2.121M10.316 6.263h2.122M7.697 4.924V2.802M1.824 7.279a1.016 1.016 0 1 0 0-2.031 1.016 1.016 0 0 0 0 2.03M13.506 7.279a1.016 1.016 0 1 0 0-2.031 1.016 1.016 0 0 0 0 2.03M7.697 2.803a1.016 1.016 0 1 0 0-2.032 1.016 1.016 0 0 0 0 2.032"
    />
  </svg>
);
export default SvgQuickRouteAirwireIcon;
