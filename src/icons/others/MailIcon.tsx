import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMailIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 23 20"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m1.836 4 6.413 3.917c2.549 1.444 3.625 1.444 6.174 0L20.836 4"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M1.353 11.476c.065 3.065.098 4.598 1.229 5.733 1.13 1.136 2.705 1.175 5.854 1.254 1.94.05 3.862.05 5.802 0 3.149-.08 4.723-.118 5.854-1.254 1.13-1.135 1.164-2.668 1.23-5.733.02-.986.02-1.966 0-2.952-.066-3.065-.1-4.598-1.23-5.733-1.131-1.136-2.705-1.175-5.854-1.254a115 115 0 0 0-5.802 0c-3.15.079-4.723.118-5.854 1.254-1.131 1.135-1.164 2.668-1.23 5.733q-.03 1.475 0 2.952"
    />
  </svg>
);
export default SvgMailIcon;
