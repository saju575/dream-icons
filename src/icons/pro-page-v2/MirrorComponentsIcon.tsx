import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMirrorComponentsIcon = ({
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
      d="M13.134 1.542H4.875a3.333 3.333 0 0 0-3.333 3.333v8.258a3.333 3.333 0 0 0 3.333 3.334h8.259a3.333 3.333 0 0 0 3.333-3.334V4.875a3.333 3.333 0 0 0-3.333-3.333ZM9.742 4.367l3.675 3.675M12.776 12.55l-7.55-7.542"
    />
  </svg>
);
export default SvgMirrorComponentsIcon;
