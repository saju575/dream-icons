import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLinkAltIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 21 19"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m8.604 15.416-1.87 1.7a3.4 3.4 0 0 1-4.806-.238 3.4 3.4 0 0 1 .239-4.805l4.805-4.349a3.4 3.4 0 0 1 4.806.24"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m11.49 3.625 1.87-1.701a3.4 3.4 0 0 1 4.807.239 3.4 3.4 0 0 1-.24 4.805l-4.805 4.348a3.4 3.4 0 0 1-4.806-.239"
    />
  </svg>
);
export default SvgLinkAltIcon;
