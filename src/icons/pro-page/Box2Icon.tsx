import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBox2Icon = ({
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
      d="M13.242 1.425H4.76a3.333 3.333 0 0 0-3.333 3.333v8.484a3.333 3.333 0 0 0 3.333 3.333h8.483a3.333 3.333 0 0 0 3.334-3.333V4.758a3.333 3.333 0 0 0-3.334-3.333"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.06 3.841H4.6a.833.833 0 0 0-.832.834v2.458c0 .46.373.833.833.833h2.458c.46 0 .834-.373.834-.833V4.675a.833.833 0 0 0-.834-.834M13.401 3.841h-2.458a.833.833 0 0 0-.834.834v2.458c0 .46.373.833.834.833H13.4c.46 0 .833-.373.833-.833V4.675a.833.833 0 0 0-.833-.834M8.984 9.208l-1.867 2.425 2.8-.483-2.508 3.325"
    />
  </svg>
);
export default SvgBox2Icon;
