import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCreatePartInPlaceIcon = ({
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
      strokeMiterlimit={10}
      strokeWidth={1.2}
      d="M9 14.792V8.758M10.25 1.5h-2.5A2.5 2.5 0 0 0 5.25 4v2.5A2.5 2.5 0 0 0 7.75 9h2.5a2.5 2.5 0 0 0 2.5-2.5V4a2.5 2.5 0 0 0-2.5-2.5ZM15.667 13.075h-1.758a.833.833 0 0 0-.834.833v1.759c0 .46.373.833.834.833h1.758c.46 0 .833-.373.833-.833v-1.759a.833.833 0 0 0-.833-.833ZM4.092 13.075H2.333a.833.833 0 0 0-.833.833v1.759c0 .46.373.833.833.833h1.759c.46 0 .833-.373.833-.833v-1.759a.833.833 0 0 0-.833-.833ZM4.925 14.792h8.15"
    />
  </svg>
);
export default SvgCreatePartInPlaceIcon;
