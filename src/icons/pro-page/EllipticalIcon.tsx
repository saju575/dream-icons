import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEllipticalIcon = ({
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
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.11 1.167c.083.091.173.183.256.274 3.745 4.146 5.215 8.941 3.285 10.728-1.93 1.778-6.521-.133-10.258-4.28C2.364 5.646 1 3.211.5 1.167"
    />
  </svg>
);
export default SvgEllipticalIcon;
