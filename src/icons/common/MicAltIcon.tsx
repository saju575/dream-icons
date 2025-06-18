import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const MicAltIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 12 17"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M6 10.667a2.4 2.4 0 0 1-1.77-.73 2.4 2.4 0 0 1-.73-1.77v-5q0-1.042.73-1.771A2.4 2.4 0 0 1 6 .666a2.4 2.4 0 0 1 1.771.73 2.4 2.4 0 0 1 .73 1.77v5a2.4 2.4 0 0 1-.73 1.772 2.4 2.4 0 0 1-1.77.729M5.167 16.5v-2.562Q3.001 13.646 1.584 12T.167 8.167h1.667q0 1.728 1.218 2.948Q4.272 12.333 6 12.333q1.73 0 2.948-1.218 1.22-1.22 1.219-2.948h1.667q0 2.187-1.417 3.833Q9 13.645 6.834 13.938V16.5zM6 9q.354 0 .594-.24t.24-.593v-5a.8.8 0 0 0-.24-.594.8.8 0 0 0-.594-.24.8.8 0 0 0-.593.24.8.8 0 0 0-.24.594v5q0 .354.24.593Q5.647 9 6 9"
    />
  </svg>
);
export default MicAltIcon;
