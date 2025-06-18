import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLoftIcon = ({
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
      d="M8.116 3.404c1.483 0 2.686-.65 2.686-1.452S9.6.5 8.116.5C6.632.5 5.43 1.15 5.43 1.952s1.202 1.452 2.686 1.452"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.801 1.953 15.5 10.63 9.82 15.5.5 12.534 5.429 1.953M8.635 3.413 9.82 15.5"
    />
  </svg>
);
export default SvgLoftIcon;
