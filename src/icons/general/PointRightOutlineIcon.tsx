import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const PointRightOutlineIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 22 18"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.485 7.755h3.004m0 0h3.506c.831 0 1.505-.672 1.505-1.502 0-.829-.674-1.501-1.505-1.501h-5.464m1.958 3.003-.027 1.054a2 2 0 0 1-.978 1.668m-.953-5.725H8.968m4.563 0-2.76-2.594C8.904.586 7.542 1.412 6.786 1.992L4.348 3.607C2.281 4.832 1.5 6.25 1.5 7.442v4.88c0 2.266 2.382 4.38 4.566 4.38l5.2.047a2 2 0 0 0 2.004-1.732l.19-1.54m1.024-3c-.3.18-.65.282-1.025.282h-1.004m2.029-.282-.054 1.336a2 2 0 0 1-2.003 1.95h-1.004"
    />
  </svg>
);
export default PointRightOutlineIcon;
