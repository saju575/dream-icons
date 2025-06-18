import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDistenceBetween2PointFlatIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 4"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M1.433 2.775a.933.933 0 1 0 0-1.866.933.933 0 0 0 0 1.866M14.568 2.775a.933.933 0 1 0 0-1.866.933.933 0 0 0 0 1.866M3.682 1.995 4.88 3.354V.645zM12.317 1.995 11.113.645v2.709zM5.318 1.996h5.598"
    />
  </svg>
);
export default SvgDistenceBetween2PointFlatIcon;
