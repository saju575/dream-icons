import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const MovieIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 16"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="m2 0 2 4h3L5 0h2l2 4h3l-2-4h2l2 4h3l-2-4h3q.824 0 1.413.588Q20 1.175 20 2v12q0 .825-.587 1.412A1.93 1.93 0 0 1 18 16H2q-.824 0-1.412-.588A1.93 1.93 0 0 1 0 14V2Q0 1.176.588.588A1.93 1.93 0 0 1 2 0m0 6v8h16V6z"
    />
  </svg>
);
export default MovieIcon;
