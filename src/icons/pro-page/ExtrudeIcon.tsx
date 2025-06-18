import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgExtrudeIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 18"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m.717 14.767 7.375 1.95 7.367-1.95M10.367 10.283l5.092 1.359-5.092 1.35-2.275.6-2.459-.642-4.916-1.308 4.916-1.3M.717 11.642v3.125M15.457 11.642v3.125M8.092 13.6v3.125M5.633 10.233v-6.8L7.999 1.55l2.367 1.883v6.85M1.95 3.117v4.941"
    />
    <path fill="currentColor" d="M.291 3.608 1.949.725l1.659 2.883z" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.725 3.117v4.941"
    />
    <path fill="currentColor" d="M12.059 3.608 13.725.725l1.659 2.883z" />
  </svg>
);
export default SvgExtrudeIcon;
