import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCADDirectIcon = ({
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
      d="M16.499 13.45v-2.592a1.76 1.76 0 0 0-.884-1.525l-2.241-1.291a1.75 1.75 0 0 0-1.759 0L9.374 9.333a1.77 1.77 0 0 0-.884 1.525v2.592c0 .625.334 1.208.884 1.525l2.241 1.292a1.75 1.75 0 0 0 1.759 0l2.241-1.292c.542-.317.884-.892.884-1.525ZM12.498 16.5v-4.45M12.498 12.05l3.633-2.1M12.498 12.05 8.84 9.925M4.841 12.5a3.33 3.33 0 0 1-3.333-3.333V4.842A3.33 3.33 0 0 1 4.84 1.508h4.325A3.33 3.33 0 0 1 12.5 4.842M4.4 4.25h4.925M4.4 7h3.15M4.4 9.75H5.51"
    />
  </svg>
);
export default SvgCADDirectIcon;
