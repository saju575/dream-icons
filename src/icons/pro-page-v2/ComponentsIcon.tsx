import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgComponentsIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 17 17"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M6.033 3.65h4.525M3.65 10.55V6.025M11.924 14.3H7.4M14.308 7.392v4.525"
    />
    <path
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={1.2}
      d="M15.55 12.217h-2.5a.833.833 0 0 0-.833.833v2.5c0 .46.373.834.833.834h2.5c.46 0 .834-.374.834-.834v-2.5a.833.833 0 0 0-.834-.833ZM4.9 1.558H2.4a.833.833 0 0 0-.834.834v2.5c0 .46.373.833.834.833h2.5c.46 0 .833-.373.833-.833v-2.5a.833.833 0 0 0-.833-.834Z"
    />
  </svg>
);
export default SvgComponentsIcon;
