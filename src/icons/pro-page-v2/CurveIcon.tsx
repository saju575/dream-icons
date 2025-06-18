import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCurveIcon = ({
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
      d="M1.816 13.267h.2c.492 0 1.767-.075 2.592-.825.708-.642 1.067-1.809 1.067-3.45 0-3.967 1.241-6.017 2.6-7.475M16.225 4.734S12.333 4.009 12.333 9c0 3.4-.941 5.892-2.258 7.509"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.2}
      d="M16.575 1.425S9 .533 9 9s-7.575 7.575-7.575 7.575"
    />
  </svg>
);
export default SvgCurveIcon;
