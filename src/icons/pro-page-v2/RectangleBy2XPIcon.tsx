import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRectangleBy2XPIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 20"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.2}
      d="M15.233 8.017v-2.7a2.827 2.827 0 0 0-2.825-2.825H5.325A2.827 2.827 0 0 0 2.5 5.317V12.4a2.827 2.827 0 0 0 2.825 2.825h1.558"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.2}
      d="M15.233 12.783a2.383 2.383 0 1 0 0-4.767 2.383 2.383 0 0 0 0 4.767ZM9.258 17.617a2.383 2.383 0 1 0 0-4.767 2.383 2.383 0 0 0 0 4.767Z"
    />
  </svg>
);
export default SvgRectangleBy2XPIcon;
