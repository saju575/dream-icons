import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPlaySkipForwordIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 12 12"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M.666 1.333v9.334m10.623-4.25c-.169.808-1.072 1.388-2.876 2.548-1.964 1.262-2.945 1.894-3.74 1.65a1.9 1.9 0 0 1-.726-.423c-.614-.58-.614-1.784-.614-4.192s0-3.612.614-4.192c.207-.194.455-.34.726-.423.795-.244 1.776.388 3.74 1.65 1.804 1.16 2.706 1.74 2.876 2.548.058.274.058.56 0 .834"
    />
  </svg>
);
export default SvgPlaySkipForwordIcon;
