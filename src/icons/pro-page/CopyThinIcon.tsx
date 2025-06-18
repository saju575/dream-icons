import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCopyThinIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 14 14"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.634 1.013h-4.62a2 2 0 0 0-2 2v4.62a2 2 0 0 0 2 2h4.62a2 2 0 0 0 2-2v-4.62a2 2 0 0 0-2-2"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.981 4.36h-4.62a2 2 0 0 0-2 2v4.62a2 2 0 0 0 2 2h4.62a2 2 0 0 0 2-2V6.36a2 2 0 0 0-2-2"
    />
  </svg>
);
export default SvgCopyThinIcon;
