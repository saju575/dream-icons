import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSnapToGridIcon = ({
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
      d="M6.042 1.542H2.367a.833.833 0 0 0-.834.833V6.05c0 .46.373.833.834.833h3.675c.46 0 .833-.373.833-.833V2.375a.833.833 0 0 0-.833-.833ZM11.966 6.892h3.675c.46 0 .834-.373.834-.833V2.384a.833.833 0 0 0-.834-.834h-3.675a.833.833 0 0 0-.833.834v3.675c0 .46.373.833.833.833ZM6.042 11.108H2.367a.833.833 0 0 0-.834.834v3.675c0 .46.373.833.834.833h3.675c.46 0 .833-.373.833-.833v-3.675a.833.833 0 0 0-.833-.834ZM11.966 16.459h3.675c.46 0 .834-.374.834-.834V11.95a.833.833 0 0 0-.834-.833h-3.675a.833.833 0 0 0-.833.833v3.675c0 .46.373.834.833.834ZM6.875 14.017h4.25M6.875 4.217h4.25M4.2 11.125V6.867M13.8 11.125V6.867"
    />
    <path
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={1.2}
      d="M9.234 9a.233.233 0 1 1-.467 0 .233.233 0 0 1 .467 0Z"
    />
  </svg>
);
export default SvgSnapToGridIcon;
