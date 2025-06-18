import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgReplacePartWith3DfinditIcon = ({
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
      d="M13.892 12.917V9.3a1.76 1.76 0 0 0-.883-1.525L9.876 5.967a1.75 1.75 0 0 0-1.759 0L4.984 7.775A1.77 1.77 0 0 0 4.1 9.3v3.617c0 .625.333 1.208.883 1.525l3.133 1.808a1.75 1.75 0 0 0 1.759 0l3.133-1.808c.542-.317.883-.892.883-1.525Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="m5.342 8.992 3.242 1.875c.258.15.567.15.825 0l3.241-1.875a.822.822 0 0 0 0-1.425L9.41 5.692a.81.81 0 0 0-.825 0L5.342 7.567a.822.822 0 0 0 0 1.425"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.2}
      d="M9.001 16.467v-5.359"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="m4.15 4.15 2.5 2.5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.2}
      d="M3.375 1.542h-1a.833.833 0 0 0-.833.833v1c0 .46.373.833.833.833h1c.46 0 .834-.373.834-.833v-1a.833.833 0 0 0-.834-.833Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="m13.875 4.15-2.5 2.5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.2}
      d="M14.641 4.217h1c.46 0 .834-.373.834-.834v-1a.833.833 0 0 0-.834-.833h-1a.833.833 0 0 0-.833.833v1c0 .46.373.834.833.834Z"
    />
  </svg>
);
export default SvgReplacePartWith3DfinditIcon;
