import type { SVGProps } from "react";
import React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const CommentOutlineIcon = ({
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
      strokeWidth={2}
      d="M5.099 18q-1.95-.192-2.927-1.172C1 15.657 1 13.771 1 10v-.5c0-3.771 0-5.657 1.172-6.828S5.229 1.5 9 1.5h4c3.771 0 5.657 0 6.828 1.172S21 5.729 21 9.5v.5c0 3.771 0 5.657-1.172 6.828S16.771 18 13 18c-.56.012-1.007.055-1.445.155-1.199.276-2.309.89-3.405 1.424-1.563.762-2.344 1.143-2.834.786-.938-.698-.021-2.863.184-3.865"
    />
  </svg>
);
export default CommentOutlineIcon;
