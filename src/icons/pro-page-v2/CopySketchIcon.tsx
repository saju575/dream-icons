import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCopySketchIcon = ({
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
      strokeMiterlimit={10}
      strokeWidth={1.2}
      d="M12.176 13.158c0 2.292-1.967 3.334-3.334 3.334h-4a3.33 3.33 0 0 1-3.333-3.334V9.133c0-2.308 1.975-3.333 3.333-3.333"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.2}
      d="M16.492 6.175V8.9c0 2.292-1.967 3.333-3.334 3.333h-4A3.33 3.33 0 0 1 5.826 8.9V4.875c0-2.308 1.975-3.333 3.334-3.333h2.691z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M16.492 6.175 11.85 1.542l-.692 5.35z"
    />
  </svg>
);
export default SvgCopySketchIcon;
