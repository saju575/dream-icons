import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgConstructionIcon = ({
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
      d="M2.95 13.483V4.675c0-.917.75-1.667 1.666-1.667h6.1M15.033 13.484v1.3c0 .916-.75 1.666-1.667 1.666H9.474c-.916 0-1.666-.75-1.666-1.666V9.258c0-.916.75-1.666 1.666-1.666h3.892c.917 0 1.667.75 1.667 1.666v1.3"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.2}
      d="M15.666 10.567h-1.258a.833.833 0 0 0-.834.833v1.259c0 .46.373.833.834.833h1.258c.46 0 .833-.373.833-.833V11.4a.833.833 0 0 0-.833-.833ZM12.8 1.542H11.54a.833.833 0 0 0-.833.833v1.258c0 .46.373.834.833.834H12.8c.46 0 .833-.373.833-.834V2.375a.833.833 0 0 0-.833-.833ZM3.583 13.584H2.325a.833.833 0 0 0-.834.833v1.258c0 .46.373.834.834.834h1.258c.46 0 .833-.374.833-.834v-1.258a.833.833 0 0 0-.833-.833Z"
    />
  </svg>
);
export default SvgConstructionIcon;
