import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTangentArcIcon = ({
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
      d="M9 5.192v11.392M6.933 11.109a2.216 2.216 0 0 1-2.216-2.217V5.534A2.216 2.216 0 0 0 2.5 3.317h-1M11.066 14.308a2.216 2.216 0 0 0 2.217-2.216V8.733c0-1.225.992-2.216 2.217-2.216h1M9 5.192a1.867 1.867 0 1 0 0-3.733 1.867 1.867 0 0 0 0 3.733Z"
    />
  </svg>
);
export default SvgTangentArcIcon;
