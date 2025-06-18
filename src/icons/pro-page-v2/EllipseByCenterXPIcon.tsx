import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEllipseByCenterXPIcon = ({
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
      strokeMiterlimit={10}
      strokeWidth={1.2}
      d="M12.516 10a2.514 2.514 0 0 1-2.517 2.517A2.514 2.514 0 0 1 7.482 10 2.514 2.514 0 0 1 10 7.483c.442 0 .858.117 1.217.309a2.52 2.52 0 0 1 1.3 2.208ZM10 4.683V2.517M4.684 10H2.518M10 15.317v2.167M15.316 10h2.167"
    />
  </svg>
);
export default SvgEllipseByCenterXPIcon;
