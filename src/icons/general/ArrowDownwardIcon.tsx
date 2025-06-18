import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const ArrowDownwardIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 13 13"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M5.875 10.356V.875q0-.266.18-.445.18-.18.445-.18.266 0 .445.18.18.18.18.445v9.48l4.308-4.307a.59.59 0 0 1 .435-.183.62.62 0 0 1 .443.196q.18.195.187.439a.58.58 0 0 1-.187.44l-5.284 5.283a.69.69 0 0 1-.527.213.688.688 0 0 1-.527-.213L.689 6.939a.6.6 0 0 1-.177-.429.62.62 0 0 1 .177-.45.61.61 0 0 1 .446-.193q.251 0 .445.194z"
    />
  </svg>
);
export default ArrowDownwardIcon;
