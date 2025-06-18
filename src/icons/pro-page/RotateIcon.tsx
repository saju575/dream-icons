import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRotateIcon = ({
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
      d="M.667 8.817a7.333 7.333 0 0 1 14.667 0 7.35 7.35 0 0 1-4.175 6.625"
    />
    <path
      fill="currentColor"
      stroke="currentColor"
      d="m11.621 16.622-2.655-.726 1.954-1.939z"
    />
  </svg>
);
export default SvgRotateIcon;
