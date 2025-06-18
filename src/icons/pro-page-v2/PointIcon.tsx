import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPointIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 20"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="m2.5 2.483 1.558 9.642L6.442 9.75l3.491 7.775-.141-3.092-.417-8.708-.067-1.558-3.091 2.166zM16.659 2.5h-2.984a.833.833 0 0 0-.833.833v3.892c0 .46.373.833.833.833h2.983c.46 0 .834-.373.834-.833V3.333a.833.833 0 0 0-.834-.833M15.166 8.058v9.467"
    />
  </svg>
);
export default SvgPointIcon;
