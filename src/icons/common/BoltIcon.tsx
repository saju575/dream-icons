import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const BoltIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 15 20"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M5 13H1.9q-.6 0-.888-.537-.286-.538.063-1.038L8.55.675q.25-.35.65-.488.4-.137.825.013t.625.525.15.8L10 8h3.875q.65 0 .912.575.263.575-.162 1.075L6.4 19.5a1.27 1.27 0 0 1-.675.425 1.13 1.13 0 0 1-.775-.075 1.3 1.3 0 0 1-.588-.538 1.23 1.23 0 0 1-.162-.787z"
    />
  </svg>
);
export default BoltIcon;
