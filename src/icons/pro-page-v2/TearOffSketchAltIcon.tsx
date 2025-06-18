import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTearOffSketchAltIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 20"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M10.834 15.808c0 .917-.75 1.667-1.666 1.667H4.184c-.916 0-1.666-.75-1.666-1.667V4.192c0-.917.75-1.667 1.666-1.667h4.984c.916 0 1.666.75 1.666 1.667"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.2}
      d="M11.975 7.192H9.692c-.92 0-1.667.746-1.667 1.666v2.284c0 .92.747 1.666 1.667 1.666h2.283c.92 0 1.667-.746 1.667-1.666V8.858c0-.92-.746-1.666-1.667-1.666ZM13.643 10h3.866"
    />
  </svg>
);
export default SvgTearOffSketchAltIcon;
