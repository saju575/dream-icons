import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgExtrudeAltIcon = ({
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
      d="m.5 3.467 5.036 2.279 5.292-2.294-.015 6.999-5.24 2.382-5.058-2.345zM5.537 5.746l.037 7.087M.5 3.467l5.197-2.3 5.13 2.285M14.045 4.892v6.776M14.023 2.332l-1.47 2.605H15.5z"
    />
  </svg>
);
export default SvgExtrudeAltIcon;
