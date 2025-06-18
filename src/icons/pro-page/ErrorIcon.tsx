import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgErrorIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 18 16"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M9.085 15.25H5.862c-2.31 0-3.753-2.5-2.598-4.5l1.611-2.792 1.612-2.79c1.154-2 4.041-2 5.196 0l1.611 2.79 1.612 2.792c1.155 2-.289 4.5-2.598 4.5z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      d="M9 9.212v3.333M9 5.667V6.5"
    />
  </svg>
);
export default SvgErrorIcon;
