import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgConvertToCurveIcon = ({
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
      d="M10.767 4.008 14 7.242M4 7.233l3.233-3.225M7.233 14 4 10.775M14 10.775 10.767 14M13.283 8.258v1.509c0 .46.373.833.834.833h1.508c.46 0 .833-.373.833-.833V8.258a.833.833 0 0 0-.833-.833h-1.508a.833.833 0 0 0-.834.833ZM4.691 9.775V8.267a.833.833 0 0 0-.833-.834H2.35a.833.833 0 0 0-.834.834v1.508c0 .46.373.833.834.833h1.508c.46 0 .833-.373.833-.833ZM9.742 13.367H8.234a.833.833 0 0 0-.834.833v1.508c0 .46.373.834.834.834h1.508c.46 0 .833-.373.833-.834V14.2a.833.833 0 0 0-.833-.833ZM8.234 4.683h1.508c.46 0 .833-.373.833-.833V2.342a.833.833 0 0 0-.833-.834H8.234a.833.833 0 0 0-.834.834V3.85c0 .46.373.833.834.833Z"
    />
  </svg>
);
export default SvgConvertToCurveIcon;
