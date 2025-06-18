import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTrimCornerIcon = ({
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
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.2}
      d="M17.534 14.2a3.33 3.33 0 0 1-3.334 3.333H5.8A3.33 3.33 0 0 1 2.467 14.2V5.8A3.33 3.33 0 0 1 5.8 2.467"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M17.5 7.5v1.667h-1.666M12.5 9.167h-1.666V7.5M10.834 4.175V2.508h1.667M15.834 2.508h1.667v1.667"
    />
  </svg>
);
export default SvgTrimCornerIcon;
