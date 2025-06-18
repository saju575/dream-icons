import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMoveIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 18"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      d="M8 16.525v-5.042M8 1.475v5.042M.518 9h5M15.483 9h-5M11.6 1.508h.559a3.33 3.33 0 0 1 3.333 3.334V5.4M.509 5.4v-.558a3.33 3.33 0 0 1 3.333-3.334H4.4M4.4 16.492h-.558A3.33 3.33 0 0 1 .51 13.158V12.6M15.492 12.6v.558a3.33 3.33 0 0 1-3.333 3.334H11.6M9.226 6.517H6.768c-.69 0-1.25.56-1.25 1.25v2.458c0 .69.56 1.25 1.25 1.25h2.458c.69 0 1.25-.56 1.25-1.25V7.767c0-.69-.56-1.25-1.25-1.25Z"
    />
  </svg>
);
export default SvgMoveIcon;
