import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRipUpIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 17 14"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M9.06 5.14 7.018 9.732M5.746 6.418l4.586 2.042M.885.667a6.04 6.04 0 0 1 3.264.763c1.703.961 2.388 2.466 2.586 2.947M15.885 13.222a5.98 5.98 0 0 1-3.35-.233c-1.83-.678-2.748-2.049-3.023-2.494"
    />
  </svg>
);
export default SvgRipUpIcon;
