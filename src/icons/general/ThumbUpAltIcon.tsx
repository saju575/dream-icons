import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const ThumbUpAltIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 21 20"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M19 7q.8 0 1.4.6T21 9v2q0 .176-.05.375-.05.2-.1.375l-3 7.05q-.225.5-.75.85T16 20H5V7l6-5.95q.375-.375.887-.437.513-.063.988.187t.7.7.1.925L12.55 7zM7 7.85V18h9l3-7V9h-9l1.35-5.5zM2 20q-.824 0-1.412-.587A1.93 1.93 0 0 1 0 18V9q0-.825.588-1.412A1.93 1.93 0 0 1 2 7h3v2H2v9h3v2z"
    />
  </svg>
);
export default ThumbUpAltIcon;
