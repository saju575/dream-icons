import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const ArduinoIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 11"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M14.688 0A5.31 5.31 0 0 0 10 2.813a5.313 5.313 0 1 0 0 5A5.312 5.312 0 1 0 14.688 0M5.313 9.375a4.062 4.062 0 1 1 0-8.125 4.062 4.062 0 0 1 0 8.125m9.375 0a4.063 4.063 0 1 1 0-8.125 4.063 4.063 0 0 1 0 8.125"
    />
    <path
      fill="currentColor"
      d="M2.813 4.688a.625.625 0 0 0 0 1.25h5a.625.625 0 0 0 0-1.25zM15.313 4.688V2.813a.625.625 0 1 0-1.25 0v1.874h-1.876a.625.625 0 1 0 0 1.25h1.876v1.875a.625.625 0 1 0 1.25 0V5.938h1.874a.625.625 0 1 0 0-1.25z"
    />
  </svg>
);
export default ArduinoIcon;
