import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgZoomInAltIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m12.933 12.933 1.734 1.734M13.8 9.9a3.9 3.9 0 1 0-7.8 0 3.9 3.9 0 0 0 7.8 0"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m12.717 12.717 1.95 1.95M8.601 9.9h1.3m0 0h1.3m-1.3 0V8.6m0 1.3v1.3M1.334 4c.087-.89.284-1.49.73-1.936.447-.447 1.047-.643 1.937-.73m0 13.333c-.89-.087-1.49-.284-1.936-.731-.447-.447-.644-1.046-.731-1.936m13.333-8c-.086-.89-.284-1.49-.73-1.936-.447-.447-1.046-.643-1.936-.73M1.334 6.666v2.666m8-8H6.667M13.801 9.9a3.9 3.9 0 1 0-7.8 0 3.9 3.9 0 0 0 7.8 0"
    />
  </svg>
);
export default SvgZoomInAltIcon;
