import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLinearPatternIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 14"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M5.888 7.094c.912 0 1.65-.747 1.65-1.667S6.8 3.76 5.888 3.76c-.91 0-1.65.746-1.65 1.667 0 .92.739 1.667 1.65 1.667Z"
    />
    <path
      stroke="currentColor"
      strokeMiterlimit={10}
      d="M10.244 9.79a1.07 1.07 0 0 0 1.064-1.077 1.07 1.07 0 0 0-1.064-1.077A1.07 1.07 0 0 0 9.18 8.713a1.07 1.07 0 0 0 1.064 1.076ZM1.564 3.32A1.07 1.07 0 0 0 2.63 2.243a1.07 1.07 0 0 0-1.065-1.076A1.07 1.07 0 0 0 .5 2.243 1.07 1.07 0 0 0 1.564 3.32ZM14.213 12.833c.71 0 1.287-.582 1.287-1.301 0-.72-.576-1.302-1.287-1.302s-1.287.583-1.287 1.302.576 1.301 1.287 1.301Z"
    />
  </svg>
);
export default SvgLinearPatternIcon;
