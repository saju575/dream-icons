import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTextProfileIcon = ({
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
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M1.525 9.008H7.41M16.475 9.008h-5.883M1.525 5.267h14.95M1.525 12.758h14.95M1.525 1.517H9M9 16.508h7.475"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.2}
      d="M7.418 8.258v1.509c0 .46.373.833.833.833H9.76c.46 0 .833-.373.833-.833V8.258a.833.833 0 0 0-.833-.833H8.25a.833.833 0 0 0-.833.833Z"
    />
  </svg>
);
export default SvgTextProfileIcon;
