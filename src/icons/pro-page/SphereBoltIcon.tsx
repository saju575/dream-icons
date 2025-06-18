import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSphereBoltIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 18"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.725 15.842H7.6c-.925-.05-1.85-.3-2.725-.75C1.517 13.367.192 9.233 1.917 5.875"
    />
    <path fill="currentColor" d="m7.05 14.167 3.042 1.35-2.683 1.958z" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.393 2.167c.925.05 1.858.3 2.741.75 3.359 1.725 4.684 5.858 2.959 9.216"
    />
    <path fill="currentColor" d="M9.026 3.858 6.018 2.45 8.743.542z" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m4.857 4.908 1.459 6.908L8.24 9.9l3.041 3.041-1.666-6.824-1.784 1.891z"
    />
  </svg>
);
export default SvgSphereBoltIcon;
