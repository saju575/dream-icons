import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const BoxIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M2.667 6.667v14.666h18.666V6.667h-4v8.5q0 .766-.633 1.15-.634.383-1.3.05l-3.4-1.7-3.4 1.7q-.667.333-1.3-.05-.633-.384-.633-1.15v-8.5zm0 17.333a2.57 2.57 0 0 1-1.884-.783A2.57 2.57 0 0 1 0 21.333V4.7q0-.466.15-.9T.6 3L2.267.967Q2.634.5 3.183.25 3.733 0 4.333 0h15.334q.6 0 1.15.25t.916.717L23.4 3q.3.366.45.8.15.433.15.9v16.633q0 1.1-.783 1.884a2.57 2.57 0 0 1-1.884.783zM3.2 4h17.6l-1.133-1.333H4.333zm6.133 2.667V13L12 11.667 14.667 13V6.667z"
    />
  </svg>
);
export default BoxIcon;
