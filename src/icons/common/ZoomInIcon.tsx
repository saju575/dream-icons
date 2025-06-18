import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const ZoomInIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M5.083 6.75H4.25a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.593q0-.354.24-.594t.594-.24h.833V4.25q0-.354.24-.594t.594-.24.593.24.24.594v.833h.833q.354 0 .594.24t.24.594-.24.593a.8.8 0 0 1-.594.24H6.75v.833q0 .354-.24.594a.8.8 0 0 1-.593.24.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.594zm.834 4.583q-2.27 0-3.844-1.573T.5 5.917t1.573-3.844T5.917.5 9.76 2.073t1.573 3.844a5.08 5.08 0 0 1-1.083 3.166l4.667 4.667a.8.8 0 0 1 .229.583.8.8 0 0 1-.23.584.8.8 0 0 1-.583.229.8.8 0 0 1-.583-.23L9.083 10.25a5.08 5.08 0 0 1-3.167 1.083m0-1.666q1.562 0 2.656-1.094t1.094-2.656T8.573 3.26Q7.478 2.167 5.917 2.167T3.26 3.26Q2.167 4.355 2.167 5.917T3.26 8.573t2.657 1.094"
    />
  </svg>
);
export default ZoomInIcon;
