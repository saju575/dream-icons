import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRouteIcon = ({
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
      d="M9.724 16.575H4.45a3.034 3.034 0 0 1-3.033-3.033V9.717a3.034 3.034 0 0 1 3.033-3.034h9.484a2.634 2.634 0 0 0 0-5.266H4.066a2.64 2.64 0 0 0-2.642 2.641"
    />
    <path
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M16.416 12.467c0 1.65-2.983 4.025-2.983 4.025s-2.984-2.375-2.984-4.025a2.98 2.98 0 0 1 2.984-2.984 2.98 2.98 0 0 1 2.983 2.984"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M7.208 12.983H4.5M7.208 10.142H4.5"
    />
  </svg>
);
export default SvgRouteIcon;
