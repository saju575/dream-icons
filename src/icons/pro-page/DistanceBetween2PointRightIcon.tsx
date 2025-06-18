import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDistanceBetween2PointRightIcon = ({
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
      d="M2.476 14.667a1.142 1.142 0 1 0 0-2.284 1.142 1.142 0 0 0 0 2.284M13.525 3.617a1.142 1.142 0 1 0 0-2.284 1.142 1.142 0 0 0 0 2.284M4.078 11.922l1.716-.46-1.255-1.256zM11.906 4.095l-1.722.46 1.261 1.262zM5.967 10.033l4.042-4.042"
    />
  </svg>
);
export default SvgDistanceBetween2PointRightIcon;
