import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgReplacePartWithNewPartIcon = ({
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
      d="M7.426 1.658a7.42 7.42 0 0 1 5.841 1.209M4.092 4.092l9.85 9.85M4.414 2.524l-.708-.707a.833.833 0 0 0-1.178 0l-.707.707a.833.833 0 0 0 0 1.179l.707.707a.833.833 0 0 0 1.178 0l.708-.707a.833.833 0 0 0 0-1.179ZM13.587 15.468l.707.707a.833.833 0 0 0 1.179 0l.707-.707a.833.833 0 0 0 0-1.178l-.707-.707a.833.833 0 0 0-1.179 0l-.707.707a.833.833 0 0 0 0 1.178ZM2.876 13.267a7.42 7.42 0 0 1-1.209-5.842M10.492 16.258a7.453 7.453 0 0 1-5.717-1.125"
    />
  </svg>
);
export default SvgReplacePartWithNewPartIcon;
