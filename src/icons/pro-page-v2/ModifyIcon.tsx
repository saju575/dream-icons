import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgModifyIcon = ({
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
      d="M6.675 14.425H4.867a3.33 3.33 0 0 1-3.334-3.333V4.867a3.33 3.33 0 0 1 3.334-3.334h6.225a3.33 3.33 0 0 1 3.333 3.334v2.341"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.2}
      d="M16.408 12.375c.15.542-.809 1.1-.942 1.608-.133.509.425 1.476.05 1.867-.375.392-1.325-.158-1.867 0-.541.159-1.083 1.109-1.591.975-.509-.133-.542-1.241-.925-1.616-.384-.375-1.484-.35-1.642-.892s.808-1.1.942-1.608c.133-.509-.425-1.476-.05-1.867.375-.392 1.325.158 1.866 0 .542-.159 1.084-1.109 1.592-.975.508.133.542 1.241.925 1.616s1.483.35 1.642.892ZM10.559 10.95 6.292 6.683"
    />
  </svg>
);
export default SvgModifyIcon;
