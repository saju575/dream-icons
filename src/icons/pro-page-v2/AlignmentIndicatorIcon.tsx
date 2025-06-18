import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAlignmentIndicatorIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 18 18"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M4.567 7.567h8.867M1.525 10.433h14.95"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.2}
      d="m7.559 14.492.858-.859a.83.83 0 0 1 1.175 0l.858.859M10.442 3.508l-.858.859a.83.83 0 0 1-1.175 0l-.858-.859M9 4.608V1.5M9 13.392V16.5"
    />
  </svg>
);
export default SvgAlignmentIndicatorIcon;
