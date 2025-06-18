import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRigidIcon = ({
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
      d="M9.009 16.458V4.533M9.7 1.5H8.325a.833.833 0 0 0-.834.833v1.375c0 .46.373.834.834.834H9.7c.46 0 .833-.373.833-.834V2.333A.833.833 0 0 0 9.7 1.5ZM15.675 9.258H14.3a.833.833 0 0 0-.833.834v1.375c0 .46.373.833.833.833h1.375c.46 0 .834-.373.834-.833v-1.375a.833.833 0 0 0-.834-.834ZM9.008 16.459V12.3a3.667 3.667 0 0 0-3.667-3.666H4.55M2.334 10.142h1.375c.46 0 .833-.373.833-.833V7.934a.833.833 0 0 0-.833-.834H2.334a.833.833 0 0 0-.834.834v1.375c0 .46.373.833.834.833Z"
    />
  </svg>
);
export default SvgRigidIcon;
