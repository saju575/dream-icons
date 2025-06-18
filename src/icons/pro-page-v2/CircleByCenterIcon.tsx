import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCircleByCenterIcon = ({
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
      d="M9 16.534A7.533 7.533 0 1 0 9 1.467a7.533 7.533 0 0 0 0 15.067Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.2}
      d="M12.6 11.1A4.18 4.18 0 0 1 9 13.167 4.18 4.18 0 0 1 5.4 11.1M5.4 6.9A4.18 4.18 0 0 1 9 4.833c1.534 0 2.875.834 3.6 2.067"
    />
    <path
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={1.2}
      d="M9.55 9.075a.55.55 0 1 1-1.1 0 .55.55 0 0 1 1.1 0Z"
    />
  </svg>
);
export default SvgCircleByCenterIcon;
