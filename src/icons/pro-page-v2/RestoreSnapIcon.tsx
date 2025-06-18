import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRestoreSnapIcon = ({
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
      d="M4.701 8.083a4.38 4.38 0 0 1 4.675-3.458 4.4 4.4 0 0 1 4 4.758 4.4 4.4 0 0 1-4.758 4"
    />
    <path
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={1.2}
      d="m4.12 8.198 1.411-.047-.663 1.244z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M5.658 1.475h-.85a3.33 3.33 0 0 0-3.333 3.333v.842M16.525 5.65v-.842a3.33 3.33 0 0 0-3.333-3.333h-.85M12.309 16.525h.875a3.33 3.33 0 0 0 3.333-3.333V12.4M1.475 12.334v.858a3.33 3.33 0 0 0 3.333 3.333h.783"
    />
  </svg>
);
export default SvgRestoreSnapIcon;
