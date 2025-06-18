import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const UserCaptureIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 22 22"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.134 1.5c-2.666.06-4.223.315-5.287 1.375C1.915 3.803 1.604 5.108 1.5 7.2m12.366-5.7c2.666.06 4.223.315 5.287 1.375.932.928 1.243 2.233 1.347 4.325m-6.634 13.3c2.666-.06 4.223-.315 5.287-1.375.932-.928 1.243-2.233 1.347-4.325M8.134 20.5c-2.666-.06-4.223-.315-5.287-1.375-.932-.928-1.243-2.233-1.347-4.325m5 1.2c2.332-2.442 6.643-2.557 9 0m-2.005-7.5a2.502 2.502 0 0 1-3.46 2.31A2.5 2.5 0 0 1 10.991 6a2.5 2.5 0 0 1 2.503 2.5"
    />
  </svg>
);
export default UserCaptureIcon;
