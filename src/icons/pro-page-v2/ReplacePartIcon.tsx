import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgReplacePartIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 17"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.2}
      d="M9.542 3.142h2.9c1.383 0 2.5 1.117 2.5 2.5v4.725c0 1.383-1.117 2.5-2.5 2.5h-2.9M6.459 12.867h-2.9a2.497 2.497 0 0 1-2.5-2.5V5.642c0-1.383 1.116-2.5 2.5-2.5h2.9M6.459 15.475v-2.608M6.459 3.142V.608M9.542 15.475v-2.608M9.542 3.142V.608M4.059 6.334h7.883M4.059 9.667h7.883"
    />
  </svg>
);
export default SvgReplacePartIcon;
