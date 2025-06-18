import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const BagIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 33 36"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M31.24 26.058a26.27 26.27 0 0 0-7.46-14.36c-.86-.838-1.29-1.256-2.242-1.643-.952-.388-1.77-.388-3.405-.388h-3.594c-1.635 0-2.453 0-3.405.388-.95.387-1.383.805-2.243 1.643a26.27 26.27 0 0 0-7.46 14.36c-.812 4.897 3.705 8.609 8.752 8.609h12.306c5.049 0 9.567-3.712 8.75-8.609"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.433 5.405c-.345-.5-.844-1.18.186-1.333 1.059-.16 2.157.563 3.233.55.972-.015 1.467-.447 2-1.064.56-.648 1.427-2.225 2.485-2.225 1.059 0 1.925 1.577 2.486 2.225.533.617 1.028 1.05 2 1.062 1.076.017 2.174-.708 3.233-.55 1.03.155.531.833.186 1.333L22.69 7.668c-.666.967-.998 1.45-1.695 1.725s-1.595.274-3.393.274h-2.527c-1.8 0-2.698 0-3.393-.274-.695-.273-1.028-.76-1.695-1.726z"
    />
  </svg>
);
export default BagIcon;
