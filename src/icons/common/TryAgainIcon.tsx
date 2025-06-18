import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const TryAgainIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 17 17"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.583 3.083H6.417C3.322 3.083 1 5.321 1 8.5M1.417 13.917h9.166C13.678 13.917 16 11.679 16 8.5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.917 1S16 2.534 16 3.083s-2.084 2.084-2.084 2.084M3.083 11.833S1 13.367 1 13.916 3.083 16 3.083 16"
    />
  </svg>
);
export default TryAgainIcon;
