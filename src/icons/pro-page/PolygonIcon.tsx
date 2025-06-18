import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPolygonIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 18"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      d="M7.75 1.388a.5.5 0 0 1 .5 0l6.216 3.59a.5.5 0 0 1 .25.433v7.178a.5.5 0 0 1-.25.433l-6.217 3.59a.5.5 0 0 1-.5 0l-6.217-3.59a.5.5 0 0 1-.25-.433V5.411a.5.5 0 0 1 .25-.433z"
    />
  </svg>
);
export default SvgPolygonIcon;
