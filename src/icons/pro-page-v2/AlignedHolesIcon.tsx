import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAlignedHolesIcon = ({
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
      d="M5.117 10.858H3.56a2.05 2.05 0 0 0-2.05 2.05v1.559a2.05 2.05 0 0 0 2.05 2.05h1.558a2.05 2.05 0 0 0 2.05-2.05v-1.559a2.05 2.05 0 0 0-2.05-2.05ZM14.442 1.542h-1.558a2.05 2.05 0 0 0-2.05 2.05V5.15a2.05 2.05 0 0 0 2.05 2.05h1.558a2.05 2.05 0 0 0 2.05-2.05V3.592a2.05 2.05 0 0 0-2.05-2.05ZM6.634 4.367H1.509M5.117 6.758l.942-.941c.8-.8.8-2.092 0-2.892l-.942-.942M11.367 13.692h5.125M12.884 16.075l-.942-.942c-.8-.8-.8-2.091 0-2.891l.941-.942"
    />
  </svg>
);
export default SvgAlignedHolesIcon;
