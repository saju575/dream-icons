import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCreateAsConstructionIcon = ({
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
      d="M6.958 4.958 7.25 1.5h3.166v3.192M4.691 7.592 2.458 4.933l2.233-2.241 2.267 2.266M10.75 16.508H7.583v-3.2M13.041 6.958l3.467.292v3.167M10.416 4.692l2.65-2.234 2.242 2.234-2.267 2.266M9 11.042a2.042 2.042 0 1 0 0-4.084 2.042 2.042 0 0 0 0 4.084M10.45 10.45l6.058 6.058M4.958 11.042 1.49 10.75V7.592h3.2M7.583 13.308l-2.65 2.242-2.242-2.242 2.267-2.266"
    />
  </svg>
);
export default SvgCreateAsConstructionIcon;
