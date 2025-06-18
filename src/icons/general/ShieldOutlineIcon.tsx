import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const ShieldOutlineIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 20"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M8 19.9a2 2 0 0 1-.625-.1Q4 18.675 2 15.637T0 9.1V4.375Q0 3.75.363 3.25q.362-.5.937-.725l6-2.25A2.1 2.1 0 0 1 8 .15q.35 0 .7.125l6 2.25q.575.225.938.725.362.5.362 1.125V9.1q0 3.5-2 6.537T8.625 19.8q-.15.05-.3.075T8 19.9m0-2q2.6-.825 4.3-3.3T14 9.1V4.375l-6-2.25-6 2.25V9.1q0 3.025 1.7 5.5T8 17.9"
    />
  </svg>
);
export default ShieldOutlineIcon;
