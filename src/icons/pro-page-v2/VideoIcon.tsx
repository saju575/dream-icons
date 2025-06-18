import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgVideoIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 18 14"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.541 1.167H5.018A3.52 3.52 0 0 0 1.5 4.685V9.37a3.52 3.52 0 0 0 3.518 3.517H9.54A3.52 3.52 0 0 0 13.06 9.37V4.685a3.52 3.52 0 0 0-3.518-3.518M13.06 4.216l3.44-1.429v8.372l-3.41-2.105M8.267 3.701h1.904"
    />
  </svg>
);
export default SvgVideoIcon;
