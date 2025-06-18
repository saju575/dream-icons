import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgKeyboardArrowDownSmallIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 14 9"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M2.474.838 7 5.365 11.527.838a1.16 1.16 0 0 1 1.645 0c.455.455.455 1.19 0 1.645L7.817 7.838a1.16 1.16 0 0 1-1.645 0L.817 2.483a1.16 1.16 0 0 1 0-1.645 1.187 1.187 0 0 1 1.657 0"
    />
  </svg>
);
export default SvgKeyboardArrowDownSmallIcon;
