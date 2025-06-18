import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const UserGroupIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 18"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.774 15c.75 0 1.345-.471 1.88-1.13 1.096-1.35-.703-2.43-1.39-2.957-.696-.537-1.475-.842-2.264-.913m-1-2a2.5 2.5 0 0 0 0-5M3.226 15c-.75 0-1.345-.471-1.88-1.13-1.096-1.35.703-2.43 1.389-2.957C3.432 10.376 4.21 10.07 5 10m.5-2a2.5 2.5 0 0 1 0-5m2.584 9.111c-1.022.632-3.701 1.922-2.07 3.536C6.813 16.436 7.7 17 8.817 17h6.368c1.117 0 2.004-.564 2.8-1.353 1.633-1.614-1.046-2.904-2.068-3.536a7.46 7.46 0 0 0-7.832 0M15.5 4.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0"
    />
  </svg>
);
export default UserGroupIcon;
