import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAdjustableIcon = ({
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
      d="M16.459 13.125a3.33 3.33 0 0 1-3.334 3.333h-8.25a3.33 3.33 0 0 1-3.333-3.333V9M1.542 4.875a3.33 3.33 0 0 1 3.333-3.333h8.242a3.33 3.33 0 0 1 3.333 3.333V9M7.667 6.45h5.375"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.2}
      d="M6.792 5.117h-1a.833.833 0 0 0-.833.833v1c0 .46.373.833.833.833h1c.46 0 .834-.373.834-.833v-1a.833.833 0 0 0-.834-.833ZM10.376 11.55H4.959M11.209 12.884h1c.46 0 .833-.374.833-.834v-1a.833.833 0 0 0-.833-.833h-1a.833.833 0 0 0-.834.833v1c0 .46.373.833.834.833Z"
    />
  </svg>
);
export default SvgAdjustableIcon;
