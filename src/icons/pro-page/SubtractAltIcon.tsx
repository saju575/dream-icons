import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSubtractAltIcon = ({
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
      strokeLinejoin="round"
      d="M12.15.517h-8.3A3.333 3.333 0 0 0 .519 3.85v8.3a3.333 3.333 0 0 0 3.333 3.333h8.3a3.333 3.333 0 0 0 3.333-3.333v-8.3A3.333 3.333 0 0 0 12.151.517Z"
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      d="M6.425 3.808H4.642a.833.833 0 0 0-.833.833v1.784c0 .46.373.833.833.833h1.783c.46 0 .834-.373.834-.833V4.64a.833.833 0 0 0-.834-.833ZM11.359 8.741H9.576a.833.833 0 0 0-.834.834v1.783c0 .46.373.833.834.833h1.783c.46 0 .833-.373.833-.833V9.575a.833.833 0 0 0-.833-.834Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.467 4.417h1.725"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3.55 11.058h2.242M4.668 12.191V9.933"
    />
  </svg>
);
export default SvgSubtractAltIcon;
