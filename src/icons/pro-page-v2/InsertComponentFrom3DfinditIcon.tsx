import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgInsertComponentFrom3DfinditIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 14 14"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M1.55 8.417V4.85a3.33 3.33 0 0 1 3.334-3.333h3.567"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.2}
      d="M13 10.292V7.7a1.76 1.76 0 0 0-.883-1.525L9.876 4.883a1.75 1.75 0 0 0-1.759 0L5.876 6.175A1.77 1.77 0 0 0 4.992 7.7v2.592c0 .625.334 1.208.884 1.525l2.241 1.291a1.75 1.75 0 0 0 1.759 0l2.241-1.291c.542-.317.883-.892.883-1.525ZM9 13.342V8.9M9 8.9l3.633-2.109M9 8.9 5.342 6.767"
    />
  </svg>
);
export default SvgInsertComponentFrom3DfinditIcon;
