import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCopyCurrentDisplayIcon = ({
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
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M11.984 12.7a3.3 3.3 0 0 1-1.533.375H4.826a3.33 3.33 0 0 1-3.334-3.333V7.35a3.33 3.33 0 0 1 3.334-3.333h5.625a3.33 3.33 0 0 1 3.333 3.333v2.392c0 .541-.134 1.058-.359 1.508"
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M7.643 13.075v4.259"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M9.768 16.509H5.51M5.768 10.4l3.016-2.225"
    />
    <path
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={1.2}
      d="m8.442 7.557 1.4-.155-.566 1.29z"
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M14.675 11.35h-1.783a.833.833 0 0 0-.833.833v1.784c0 .46.373.833.833.833h1.783c.46 0 .834-.373.834-.833v-1.784a.833.833 0 0 0-.834-.833Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M4.826 1.35h5.625c3.308 0 6 2.692 6 6v2.392"
    />
  </svg>
);
export default SvgCopyCurrentDisplayIcon;
