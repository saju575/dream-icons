import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const FullScreenIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 14 14"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M.667 4.458c.07-1.4.277-2.273.898-2.893.62-.622 1.493-.829 2.893-.898m8.876 3.791c-.07-1.4-.277-2.273-.898-2.893-.62-.622-1.494-.829-2.894-.898m0 12.666c1.4-.069 2.274-.276 2.894-.898.621-.62.828-1.493.898-2.893m-8.876 3.791c-1.4-.069-2.273-.276-2.893-.898-.621-.62-.829-1.493-.898-2.893"
    />
  </svg>
);
export default FullScreenIcon;
