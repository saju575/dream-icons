import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const StopOutlineIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 19 19"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1.5 9.5c0-3.28 0-4.919.814-6.081a4.5 4.5 0 0 1 1.105-1.105C4.58 1.5 6.22 1.5 9.5 1.5s4.919 0 6.081.814a4.5 4.5 0 0 1 1.105 1.105C17.5 4.58 17.5 6.22 17.5 9.5s0 4.919-.814 6.081a4.5 4.5 0 0 1-1.105 1.105c-1.161.814-2.801.814-6.081.814s-4.919 0-6.081-.814a4.5 4.5 0 0 1-1.105-1.105C1.5 14.42 1.5 12.78 1.5 9.5"
    />
  </svg>
);
export default StopOutlineIcon;
