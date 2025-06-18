import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgViaIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 17 16"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      d="M15.54.5v7.328h-3.493M.54 15.24V7.92h3.492"
    />
    <path
      stroke="currentColor"
      strokeMiterlimit={10}
      d="M8.042 10.253a2.333 2.333 0 1 0 0-4.667 2.333 2.333 0 0 0 0 4.667Z"
    />
  </svg>
);
export default SvgViaIcon;
