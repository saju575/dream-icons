import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCopySketchAltIcon = ({
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
      strokeMiterlimit={10}
      strokeWidth={1.2}
      d="M4.225 12.342c-.916 0-1.666-.75-1.666-1.667v-6.45c0-.917.75-1.667 1.666-1.667h6.45c.917 0 1.667.75 1.667 1.667M11.8 7.733h4.05c.916 0 1.666.75 1.666 1.667v6.45c0 .917-.75 1.667-1.667 1.667H9.4c-.917 0-1.667-.75-1.667-1.667V11.8M13.775 13.775l-7.55-7.55"
    />
  </svg>
);
export default SvgCopySketchAltIcon;
