import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCrossProbeIcon = ({
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
      d="M11.875 7.933h3.492M7.934 3.992V.5M3.992 7.933H.5M7.934 11.875v3.492M11.126 2.242H4.742a2.5 2.5 0 0 0-2.5 2.5v6.383a2.5 2.5 0 0 0 2.5 2.5h6.384a2.5 2.5 0 0 0 2.5-2.5V4.742a2.5 2.5 0 0 0-2.5-2.5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.934 9.625a1.692 1.692 0 1 0 0-3.383 1.692 1.692 0 0 0 0 3.383"
    />
  </svg>
);
export default SvgCrossProbeIcon;
