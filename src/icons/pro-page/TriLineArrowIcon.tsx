import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTriLineArrowIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 22 20"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="m11 0 4 4h-3v7.85l6.53 3.76L20 13.03l1.5 5.47-5.5 1.46 1.53-2.61L11 13.58l-6.53 3.77L6 19.96.5 18.5 2 13.03l1.47 2.58L10 11.85V4H7z"
    />
  </svg>
);
export default SvgTriLineArrowIcon;
