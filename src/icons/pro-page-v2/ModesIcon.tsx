import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgModesIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 17"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.2}
      d="M.608 8A7.39 7.39 0 0 1 8 .608 7.39 7.39 0 0 1 15.392 8"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.2}
      d="M3.941 8A4.063 4.063 0 0 1 8 3.942 4.07 4.07 0 0 1 12.058 8M8 8v3.15"
    />
    <path
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={1.2}
      d="m8.47 11.14-1 .017a1.667 1.667 0 0 0-1.637 1.695l.017 1c.016.92.775 1.654 1.696 1.638l1-.018a1.667 1.667 0 0 0 1.637-1.695l-.018-1A1.667 1.667 0 0 0 8.47 11.14Z"
    />
  </svg>
);
export default SvgModesIcon;
