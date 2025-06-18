import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const ShieldAltIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 15 15"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.25}
      d="M7.512 4.25V5.5M7.51 1.125c-1.88 0-3.098 1.262-4.54 1.722-.586.187-.879.28-.998.412-.118.132-.153.325-.222.71-.744 4.122.881 7.934 4.756 9.417.416.16.624.239 1.006.239.383 0 .592-.08 1.008-.24 3.874-1.482 5.497-5.294 4.754-9.416-.07-.385-.105-.578-.223-.71-.12-.132-.412-.225-.998-.412-1.442-.46-2.663-1.722-4.543-1.722"
    />
  </svg>
);
export default ShieldAltIcon;
