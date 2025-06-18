import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMirrorAltIcon = ({
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
      d="M7.608 16.492H4.85a3.33 3.33 0 0 1-3.333-3.334V4.842A3.33 3.33 0 0 1 4.85 1.508h2.758M8.434 10.6 10.6 8.433M7.4 8.25l.85-.85"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M10.392 4.4V1.508h2.758a3.33 3.33 0 0 1 3.333 3.334v8.316a3.33 3.33 0 0 1-3.333 3.334h-2.758V12.85"
    />
  </svg>
);
export default SvgMirrorAltIcon;
