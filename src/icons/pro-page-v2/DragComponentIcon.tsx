import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDragComponentIcon = ({
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
      d="M6.925 13.533H4.633a3.18 3.18 0 0 1-3.175-3.175V4.633a3.18 3.18 0 0 1 3.175-3.175h5.725a3.18 3.18 0 0 1 3.175 3.175V6.35M14.15 10.183a2.383 2.383 0 0 1 2.383 2.384v1.583a2.383 2.383 0 0 1-2.384 2.383h-1.583a2.383 2.383 0 0 1-2.383-2.383M13.358 13.358l-6.7-6.7"
    />
  </svg>
);
export default SvgDragComponentIcon;
