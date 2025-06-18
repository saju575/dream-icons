import type { SVGProps } from "react";
import React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const HeartOutline = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 19"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M10 18.325q-.349 0-.713-.125a1.65 1.65 0 0 1-.637-.4l-1.725-1.575a68 68 0 0 1-4.787-4.813Q0 9.026 0 6.15 0 3.8 1.575 2.225T5.5.65q1.325 0 2.5.563t2 1.537a5.96 5.96 0 0 1 2-1.537A5.7 5.7 0 0 1 14.5.65q2.35 0 3.925 1.575T20 6.15q0 2.875-2.125 5.275a60 60 0 0 1-4.825 4.825l-1.7 1.55a1.65 1.65 0 0 1-.637.4q-.363.125-.713.125M9.05 4.75Q8.325 3.725 7.5 3.188t-2-.538q-1.5 0-2.5 1t-1 2.5q0 1.3.925 2.763t2.213 2.837a38 38 0 0 0 2.65 2.575Q9.15 15.525 10 16.3a180 180 0 0 1 2.213-1.975q1.362-1.2 2.65-2.575a19 19 0 0 0 2.212-2.837Q18 7.45 18 6.15q0-1.5-1-2.5t-2.5-1q-1.175 0-2 .538-.825.537-1.55 1.562a1.14 1.14 0 0 1-.95.5q-.274 0-.525-.125a1.14 1.14 0 0 1-.425-.375"
    />
  </svg>
);
export default HeartOutline;
