import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFrameOriginIcon = ({
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
      d="M16.508 9v4.175a3.33 3.33 0 0 1-3.333 3.333H9M1.491 9V4.825a3.33 3.33 0 0 1 3.334-3.333H9M12.758 11.5V6.492c0-.69-.56-1.25-1.25-1.25H6.499c-.69 0-1.25.56-1.25 1.25V11.5c0 .69.56 1.25 1.25 1.25h5.009c.69 0 1.25-.56 1.25-1.25Z"
    />
  </svg>
);
export default SvgFrameOriginIcon;
