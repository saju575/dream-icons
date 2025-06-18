import type { SVGProps } from "react";
import React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const EyeIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 22 15"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M11 12q1.875 0 3.188-1.312Q15.5 9.375 15.5 7.5t-1.312-3.187T11 3 7.813 4.313 6.5 7.5t1.313 3.188T11 12m0-1.8q-1.125 0-1.912-.787A2.6 2.6 0 0 1 8.3 7.5q0-1.126.788-1.912A2.6 2.6 0 0 1 11 4.8q1.125 0 1.912.788.788.787.788 1.912t-.787 1.912A2.6 2.6 0 0 1 11 10.2m0 4.8q-3.35 0-6.112-1.8T.525 8.45a1.908 1.908 0 0 1-.188-1.437Q.4 6.775.526 6.55q1.6-2.95 4.363-4.75Q7.65 0 11 0t6.113 1.8 4.362 4.75q.125.225.188.463a1.9 1.9 0 0 1 0 .974 2 2 0 0 1-.188.463q-1.6 2.95-4.363 4.75Q14.35 15 11 15m0-2a9.54 9.54 0 0 0 5.188-1.488A9.77 9.77 0 0 0 19.8 7.5a9.77 9.77 0 0 0-3.613-4.012A9.54 9.54 0 0 0 11 2a9.55 9.55 0 0 0-5.187 1.487A9.77 9.77 0 0 0 2.2 7.5a9.77 9.77 0 0 0 3.613 4.012A9.54 9.54 0 0 0 11 13"
    />
  </svg>
);
export default EyeIcon;
