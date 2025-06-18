import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCutAltIcon = ({
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
      d="M15.484 12.15a3.33 3.33 0 0 1-3.333 3.333h-8.3A3.33 3.33 0 0 1 .518 12.15v-8.3A3.33 3.33 0 0 1 3.85.517h8.3a3.33 3.33 0 0 1 3.333 3.333M15.483 8h-1.667M10.317 8H8.65M5.41 8H4.043"
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      d="M8.66 6.375H5.418v3.242H8.66z"
    />
  </svg>
);
export default SvgCutAltIcon;
