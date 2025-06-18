import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgImageIcon = ({
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
      d="M13.209 1.45H4.784A3.333 3.333 0 0 0 1.45 4.784v8.425a3.333 3.333 0 0 0 3.334 3.333h8.425a3.333 3.333 0 0 0 3.333-3.334V4.785a3.333 3.333 0 0 0-3.334-3.334Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="m1.467 13.758 4.158-2.983 2.85 5.775 3.892-7.933 4.108 5.266"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.2}
      d="M7.208 4.417H5.442a.833.833 0 0 0-.834.833v1.767c0 .46.373.833.834.833h1.766c.46 0 .834-.373.834-.833V5.25a.833.833 0 0 0-.834-.833Z"
    />
  </svg>
);
export default SvgImageIcon;
