import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAutoRouteIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeMiterlimit={10}
      d="M4.03 2.03h5.326v5.634l4.16 4.151"
    />
    <path
      stroke="currentColor"
      strokeMiterlimit={10}
      d="M2.864 3.56a1.53 1.53 0 1 0 0-3.06 1.53 1.53 0 0 0 0 3.06ZM13.89 13.998a1.53 1.53 0 1 0 0-3.06 1.53 1.53 0 0 0 0 3.06Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="m2.164 11.433.942-5.066H6.27l-1.586 3.9h1.52L2.63 15.5l.943-4.067z"
    />
  </svg>
);
export default SvgAutoRouteIcon;
