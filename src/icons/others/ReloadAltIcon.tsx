import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const ReloadAltIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 26 26"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3.665 1.333v3.654c0 .343.429.498.648.235a11.63 11.63 0 0 1 8.692-3.889c6.44 0 11.66 5.223 11.66 11.667 0 4.617-2.682 8.61-6.571 10.5m-5.405 1.166q.817 0 1.606-.107M1.64 9.111q-.196.696-.309 1.402m.04 4.281q.125.7.32 1.384m1.779 3.817q.417.62.903 1.189m3.293 2.736q.618.354 1.287.638"
    />
  </svg>
);
export default ReloadAltIcon;
