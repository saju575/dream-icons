import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTearOffSketchIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 17 18"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M1.509 7.775A6.393 6.393 0 0 0 7.9 1.383M7.91 16.617a6.393 6.393 0 0 0-6.392-6.392"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.2}
      d="m10.75 3.3 1.125-1.125a2.374 2.374 0 0 1 3.367 0L16.367 3.3M10.75 14.7l1.125 1.125a2.374 2.374 0 0 0 3.367 0l1.125-1.125M13.559 1.483v15.034"
    />
  </svg>
);
export default SvgTearOffSketchIcon;
