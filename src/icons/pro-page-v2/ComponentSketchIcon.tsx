import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgComponentSketchIcon = ({
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
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M13.975 1.508h.842c.917 0 1.667.75 1.667 1.667v9.842h-4.175V3.175c0-.917.75-1.667 1.666-1.667ZM14.392 16.483l2.092-3.466h-4.175z"
    />
    <path
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={1.2}
      d="M7.334 5.883H3.209c-.92 0-1.667.746-1.667 1.667v3.108c0 .92.746 1.667 1.667 1.667h4.125c.92 0 1.666-.746 1.666-1.667V7.55c0-.92-.746-1.667-1.666-1.667Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.2}
      d="M5.267 5.75V1.617M5.267 12.442V16.6M5.267 3.067a.725.725 0 1 0 0-1.45.725.725 0 0 0 0 1.45ZM5.267 16.575a.725.725 0 1 0 0-1.45.725.725 0 0 0 0 1.45Z"
    />
  </svg>
);
export default SvgComponentSketchIcon;
