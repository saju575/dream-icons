import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMoveComponentIcon = ({
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
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.2}
      d="M9.117 14.2H4.375a3.733 3.733 0 0 1-3.733-3.733V4.383A3.733 3.733 0 0 1 4.375.65h6.083a3.733 3.733 0 0 1 3.734 3.733v4.742"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.2}
      d="M6 10.467A1.62 1.62 0 0 1 4.382 8.85V6c0-.892.725-1.617 1.616-1.617h2.85c.892 0 1.617.725 1.617 1.617M7.642 7.642 15.4 15.4"
    />
  </svg>
);
export default SvgMoveComponentIcon;
