import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LocationOutlineIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 17 20"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M8.5 17.35q3.05-2.8 4.525-5.088Q14.5 9.976 14.5 8.2q0-2.725-1.738-4.462Q11.026 2 8.5 2T4.238 3.737Q2.5 5.476 2.5 8.2q0 1.775 1.475 4.063Q5.45 14.548 8.5 17.35m0 1.975a2.1 2.1 0 0 1-.7-.125 1.8 1.8 0 0 1-.625-.375A39 39 0 0 1 4.3 15.9q-1.25-1.424-2.087-2.763Q1.374 11.8.938 10.563.5 9.327.5 8.2q0-3.75 2.413-5.975T8.5 0t5.588 2.225T16.5 8.2q0 1.125-.437 2.363-.438 1.237-1.275 2.574A21.7 21.7 0 0 1 12.7 15.9a39 39 0 0 1-2.875 2.925 1.8 1.8 0 0 1-.625.375 2.1 2.1 0 0 1-.7.125M8.5 10q.825 0 1.412-.588Q10.5 8.826 10.5 8q0-.824-.588-1.412A1.93 1.93 0 0 0 8.5 6q-.824 0-1.412.588A1.93 1.93 0 0 0 6.5 8q0 .825.588 1.412Q7.675 10 8.5 10"
    />
  </svg>
);
export default LocationOutlineIcon;
