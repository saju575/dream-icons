import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgXYKeyInIcon = ({
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
      d="M9.009 14.508h-3.3c-1.217 0-2.2-.983-2.2-2.2v-3.3M9.009 3.508h3.3c1.217 0 2.2.984 2.2 2.2v3.3M1.5 4.508c0-1.658 1.342-3 3-3M16.5 13.508c0 1.659-1.342 3-3 3M11.159 6.867l-4.292 4.291M11.159 11.158 6.867 6.867M17.334.667l-3.492 3.491M.667 17.334l3.508-3.509"
    />
  </svg>
);
export default SvgXYKeyInIcon;
