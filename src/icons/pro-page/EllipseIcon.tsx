import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEllipseIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 14 14"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeMiterlimit={10}
      d="M12.06 12.537c1.359-1.242.195-4.728-2.599-7.786s-6.16-4.53-7.52-3.288S1.746 6.191 4.54 9.25s6.16 4.53 7.52 3.288Z"
    />
  </svg>
);
export default SvgEllipseIcon;
