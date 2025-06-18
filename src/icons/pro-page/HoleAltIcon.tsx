import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHoleAltIcon = ({
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
      d="M8.017 10.508c4.138 0 7.492-2.238 7.492-5s-3.354-5-7.492-5c-4.137 0-7.492 2.239-7.492 5s3.355 5 7.492 5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M1.459 7.275C2.217 5.308 4.892 3.85 8.076 3.85c3.183 0 5.608 1.325 6.5 3.15"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M.525 5.508v6.742c0 1.8 1.459 3.25 3.25 3.25h8.475a3.265 3.265 0 0 0 3.242-3.258v-6.75"
    />
  </svg>
);
export default SvgHoleAltIcon;
