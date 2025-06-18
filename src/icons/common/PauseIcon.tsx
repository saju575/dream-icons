import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const PauseIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 13 16"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M8 1.333C8 .873 8.373.5 8.833.5h2.5c.46 0 .834.373.834.833v13.334c0 .46-.373.833-.834.833h-2.5A.833.833 0 0 1 8 14.667zM.5 1.333C.5.873.873.5 1.333.5h2.5c.46 0 .834.373.834.833v13.334c0 .46-.373.833-.834.833h-2.5a.833.833 0 0 1-.833-.833z"
    />
  </svg>
);
export default PauseIcon;
