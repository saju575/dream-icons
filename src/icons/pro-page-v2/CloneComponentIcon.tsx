import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCloneComponentIcon = ({
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
      d="M6.608 11.417H4.8a3.34 3.34 0 0 1-3.333-3.334V4.858A3.33 3.33 0 0 1 4.8 1.525h3.225a3.33 3.33 0 0 1 3.333 3.333v1.809"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.2}
      d="M13.158 6.667H9.942A3.333 3.333 0 0 0 6.608 10v3.217a3.333 3.333 0 0 0 3.334 3.333h3.216a3.333 3.333 0 0 0 3.334-3.334V10a3.333 3.333 0 0 0-3.334-3.333Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.2}
      d="M13.192 9.967v1.95c0 .7-.566 1.267-1.266 1.267h-1.95"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.2}
      d="m12.817 12.817-1.625-1.625-6.383-6.384"
    />
  </svg>
);
export default SvgCloneComponentIcon;
