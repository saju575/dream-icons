import type { SVGProps } from "react";
import React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const CircleMinusIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 32 32"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.33 16H10.665"
    />
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M15.997 29.333c7.364 0 13.334-5.97 13.334-13.334S23.36 2.666 15.997 2.666 2.664 8.636 2.664 15.999s5.97 13.334 13.333 13.334Z"
    />
  </svg>
);
export default CircleMinusIcon;
