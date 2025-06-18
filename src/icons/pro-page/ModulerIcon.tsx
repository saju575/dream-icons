import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgModulerIcon = ({
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
      strokeLinejoin="round"
      d="M6 9.428H1.145A.57.57 0 0 0 .572 10v4.857c0 .315.256.571.572.571H6a.57.57 0 0 0 .571-.571V10a.57.57 0 0 0-.571-.572M14.858 9.428h-4.857A.57.57 0 0 0 9.43 10v4.857c0 .315.256.571.571.571h4.857a.57.57 0 0 0 .572-.571V10a.57.57 0 0 0-.572-.572M10.434.571H5.577a.57.57 0 0 0-.571.572V6c0 .315.256.571.571.571h4.857A.57.57 0 0 0 11.006 6V1.143a.57.57 0 0 0-.572-.572"
    />
  </svg>
);
export default SvgModulerIcon;
