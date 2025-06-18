import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHoleIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      d="M12.14 12.596c-.343 1.41-1.092 2.432-2.207 2.78-2.293.712-5.311-1.711-7.032-5.513"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      d="M4.438 13.68c-1.49.116-2.716-.264-3.4-1.177-1.402-1.897.031-5.436 3.217-8.208"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      d="M.998 6.897C.424 5.557.408 4.303 1.1 3.39c1.426-1.881 5.328-1.649 9.023.442"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      d="M6.572 1.616C7.703.672 8.93.276 10.037.626c2.285.735 3.257 4.42 2.357 8.478"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      d="M13.46 5.14c1.275.75 2.04 1.765 2.04 2.895-.017 2.339-3.314 4.383-7.566 4.8"
    />
  </svg>
);
export default SvgHoleIcon;
