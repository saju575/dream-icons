import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGridOptionsIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M12.042.625H3.958A3.333 3.333 0 0 0 .625 3.958v8.084a3.333 3.333 0 0 0 3.333 3.333h8.084a3.333 3.333 0 0 0 3.333-3.333V3.958A3.333 3.333 0 0 0 12.042.625M.625 5.542h14.75M.625 10.459h14.75M10.459.625v14.75M5.542.625v14.75"
    />
  </svg>
);
export default SvgGridOptionsIcon;
