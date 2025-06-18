import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRepositionOriginIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 10 18"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M6.434 3.15A3.915 3.915 0 0 1 8.9 6.783c0 .442-.166 1.117-.425 1.9M1.525 8.708c-.267-.8-.433-1.475-.433-1.925A3.915 3.915 0 0 1 3.558 3.15M7.342 11.592A103 103 0 0 1 5 16.567s-1.258-2.45-2.342-4.967"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.2}
      d="M7.333 11.583h1.209c.46 0 .833-.373.833-.833V9.542a.833.833 0 0 0-.833-.834H7.333a.833.833 0 0 0-.833.834v1.208c0 .46.373.833.833.833ZM1.458 11.583h1.209c.46 0 .833-.373.833-.833V9.542a.833.833 0 0 0-.833-.834H1.458a.833.833 0 0 0-.833.834v1.208c0 .46.373.833.833.833ZM4.392 4.308H5.6c.46 0 .834-.373.834-.833V2.267a.833.833 0 0 0-.834-.834H4.392a.833.833 0 0 0-.833.834v1.208c0 .46.373.833.833.833Z"
    />
  </svg>
);
export default SvgRepositionOriginIcon;
