import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSketchIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 17 18"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.2}
      d="M10.492 16.508h2.575a3.33 3.33 0 0 0 3.333-3.333v-8.3a3.33 3.33 0 0 0-3.333-3.333H4.85a3.33 3.33 0 0 0-3.333 3.333V8.05"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.2}
      d="m8.654 7.484 1.886 1.885-6.9 6.9a.836.836 0 0 1-1.179 0l-.707-.707a.836.836 0 0 1 0-1.178z"
    />
    <path
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={1.2}
      d="m11.895 7.73-1.6-1.6 2.177-.577z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.2}
      d="m3.041 13.092 1.892 1.891"
    />
  </svg>
);
export default SvgSketchIcon;
