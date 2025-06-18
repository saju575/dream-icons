import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SendAltIcon = ({
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
      fill="currentColor"
      d="m16.8 8.925-15.4 6.5a.99.99 0 0 1-.95-.088Q0 15.05 0 14.5v-13Q0 .95.45.662A.99.99 0 0 1 1.4.575l15.4 6.5q.625.275.625.925t-.625.925M2 13l11.85-5L2 3v3.5L8 8 2 9.5z"
    />
  </svg>
);
export default SendAltIcon;
