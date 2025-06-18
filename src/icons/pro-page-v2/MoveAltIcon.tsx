import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMoveAltIcon = ({
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
      d="M1.518 9h5M16.483 9h-5M12.6 1.508h.559a3.33 3.33 0 0 1 3.333 3.334V5.4M1.509 5.4v-.558a3.33 3.33 0 0 1 3.333-3.334H5.4M5.4 16.492h-.558a3.33 3.33 0 0 1-3.333-3.334V12.6M16.492 12.6v.558a3.33 3.33 0 0 1-3.333 3.333H12.6M10.226 6.517H7.768c-.69 0-1.25.56-1.25 1.25v2.458c0 .69.56 1.25 1.25 1.25h2.458c.69 0 1.25-.56 1.25-1.25V7.767c0-.69-.56-1.25-1.25-1.25Z"
    />
  </svg>
);
export default SvgMoveAltIcon;
