import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMenuDotIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 20"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M5.27 1.03H3.03a2 2 0 0 0-2 2v2.24a2 2 0 0 0 2 2h2.24a2 2 0 0 0 2-2V3.03a2 2 0 0 0-2-2ZM16.98 1.03h-2.24a2 2 0 0 0-2 2v2.24a2 2 0 0 0 2 2h2.24a2 2 0 0 0 2-2V3.03a2 2 0 0 0-2-2ZM5.27 12.76H3.03a2 2 0 0 0-2 2V17a2 2 0 0 0 2 2h2.24a2 2 0 0 0 2-2v-2.24a2 2 0 0 0-2-2ZM16.98 12.76h-2.24a2 2 0 0 0-2 2V17a2 2 0 0 0 2 2h2.24a2 2 0 0 0 2-2v-2.24a2 2 0 0 0-2-2Z"
    />
  </svg>
);
export default SvgMenuDotIcon;
