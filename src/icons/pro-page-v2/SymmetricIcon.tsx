import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSymmetricIcon = ({
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
      strokeWidth={1.2}
      d="M8.6 10.558H6.475a2.137 2.137 0 0 1-2.133-2.133V6.517c0-1.175.958-2.134 2.133-2.134h6.55c.809 0 1.467-.658 1.467-1.466 0-.809-.659-1.467-1.467-1.467H6.45"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.2}
      d="M7.4 7.442h2.125c1.175 0 2.134.958 2.134 2.133v1.908a2.137 2.137 0 0 1-2.134 2.134h-6.55c-.808 0-1.466.658-1.466 1.466 0 .809.658 1.467 1.466 1.467H9.55"
    />
  </svg>
);
export default SvgSymmetricIcon;
