import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DoneAllIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 22 12"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M5 11.3.75 7.05a.92.92 0 0 1-.287-.7q.012-.4.312-.7.3-.275.7-.288t.7.288l4.95 4.95-.725.7q-.3.275-.7.287A.92.92 0 0 1 5 11.3m5.65 0L6.4 7.05a.93.93 0 0 1-.275-.688q0-.412.275-.712.3-.3.713-.3.412 0 .712.3l3.525 3.525 8.5-8.5q.3-.3.7-.288t.7.313q.275.3.288.7a.92.92 0 0 1-.288.7l-9.2 9.2q-.3.3-.7.3a.96.96 0 0 1-.7-.3m.7-4.95-1.425-1.4L14.175.7a.93.93 0 0 1 .688-.275q.412 0 .712.275.3.3.3.712 0 .413-.3.713z"
    />
  </svg>
);
export default DoneAllIcon;
