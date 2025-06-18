import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const PauseOutlineIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 15 15"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M.833 3.333c0-1.178 0-1.767.367-2.133.365-.367.954-.367 2.133-.367s1.768 0 2.134.367c.366.365.366.954.366 2.133v8.333c0 1.179 0 1.768-.366 2.134-.365.366-.954.366-2.134.366s-1.767 0-2.133-.366c-.367-.365-.367-.955-.367-2.134zm8.334 0c0-1.178 0-1.767.366-2.133.365-.367.955-.367 2.134-.367s1.767 0 2.133.367c.367.365.367.954.367 2.133v8.333c0 1.179 0 1.768-.367 2.134-.366.366-.955.366-2.133.366-1.179 0-1.768 0-2.134-.366-.366-.365-.366-.955-.366-2.134z"
    />
  </svg>
);
export default PauseOutlineIcon;
