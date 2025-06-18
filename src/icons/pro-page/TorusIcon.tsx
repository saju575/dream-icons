import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTorusIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 12"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeMiterlimit={10}
      d="M8 11c4.142 0 7.5-2.239 7.5-5S12.142 1 8 1 .5 3.239.5 6s3.358 5 7.5 5Z"
    />
    <path
      stroke="currentColor"
      strokeMiterlimit={10}
      d="M7.928 7.48c2.497 0 4.52-.726 4.52-1.62s-2.023-1.62-4.52-1.62-4.522.725-4.522 1.62c0 .894 2.025 1.62 4.522 1.62Z"
    />
  </svg>
);
export default SvgTorusIcon;
