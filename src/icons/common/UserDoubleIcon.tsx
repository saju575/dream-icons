import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const UserDoubleIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 31 26"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M24.321 23.667h.654c1.533 0 2.753-.7 3.848-1.675C31.604 19.51 25.065 17 22.833 17M20.167 3.759q.454-.092.94-.092c2.426 0 4.393 1.79 4.393 4s-1.967 4-4.393 4a4.7 4.7 0 0 1-.94-.092M5.475 18.48c-1.572.843-5.694 2.563-3.183 4.715C3.519 24.248 4.884 25 6.602 25h9.797c1.717 0 3.082-.752 4.309-1.804 2.51-2.152-1.61-3.872-3.183-4.715-3.686-1.975-8.364-1.975-12.05 0M16.833 7A5.333 5.333 0 1 1 6.166 7a5.333 5.333 0 0 1 10.667 0"
    />
  </svg>
);
export default UserDoubleIcon;
