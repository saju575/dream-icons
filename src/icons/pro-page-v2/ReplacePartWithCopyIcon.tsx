import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgReplacePartWithCopyIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 17 17"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.2}
      d="M6.975 3.15A4.93 4.93 0 0 1 11.5 4.5a4.98 4.98 0 0 1 1.35 4.525M3.125 3.125l9.85 9.85M3.455 1.567 2.747.86a.833.833 0 0 0-1.178 0l-.707.707a.833.833 0 0 0 0 1.178l.707.707a.833.833 0 0 0 1.178 0l.708-.707a.833.833 0 0 0 0-1.178ZM12.62 14.513l.707.707a.833.833 0 0 0 1.178 0l.707-.707a.833.833 0 0 0 0-1.178l-.707-.707a.833.833 0 0 0-1.178 0l-.707.707a.833.833 0 0 0 0 1.178Z"
    />
  </svg>
);
export default SvgReplacePartWithCopyIcon;
