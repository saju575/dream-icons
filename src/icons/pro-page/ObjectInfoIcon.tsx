import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgObjectInfoIcon = ({
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
      d="M1.083 9c0-3.732 0-5.598 1.16-6.757C3.4 1.083 5.266 1.083 9 1.083c3.731 0 5.598 0 6.757 1.16 1.16 1.159 1.16 3.025 1.16 6.757s0 5.598-1.16 6.758c-1.159 1.159-3.025 1.159-6.757 1.159s-5.599 0-6.758-1.16S1.083 12.734 1.083 9"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.202 13.167V9c0-.392 0-.59-.122-.712-.123-.121-.319-.121-.712-.121m.625-2.5h.008"
    />
  </svg>
);
export default SvgObjectInfoIcon;
