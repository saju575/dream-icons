import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const AttachmentIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 12"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M5.5 11.5q-2.3 0-3.9-1.6T0 6t1.6-3.9T5.5.5H16q1.65 0 2.825 1.175T20 4.5t-1.175 2.825T16 8.5H6.5q-1.05 0-1.775-.725T4 6t.725-1.775T6.5 3.5h8.75a.73.73 0 0 1 .75.75.73.73 0 0 1-.75.75H6.5a.97.97 0 0 0-.713.287A.97.97 0 0 0 5.5 6q0 .424.287.713Q6.076 7 6.5 7H16q1.05 0 1.775-.725T18.5 4.5t-.725-1.775T16 2H5.5Q3.85 2 2.675 3.175T1.5 6t1.175 2.825T5.5 10h9.75a.73.73 0 0 1 .75.75.73.73 0 0 1-.75.75z"
    />
  </svg>
);
export default AttachmentIcon;
