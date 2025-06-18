import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTangentIcon = ({
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
      d="M1.425 9.275H2.3c.833 0 1.516.675 1.516 1.517v4.15c0 .833.675 1.516 1.517 1.516h6.592a2.273 2.273 0 0 0 2.275-2.275v-3.391c0-.834.675-1.517 1.517-1.517h.874"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.2}
      d="M11.4 6.617v5.516c0 .892-.725 1.617-1.617 1.617H8.225a1.62 1.62 0 0 1-1.617-1.617V6.617M3.708 5.35l2.875-2.875a3.34 3.34 0 0 1 4.717 0l2.991 2.992"
    />
  </svg>
);
export default SvgTangentIcon;
