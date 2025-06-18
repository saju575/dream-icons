import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDefineAlternateComponentIcon = ({
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
      d="M9 13.842V11a3.95 3.95 0 0 1 3.95-3.95h.933M9 13.842V11a3.95 3.95 0 0 0-3.95-3.95h-.866"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.2}
      d="M8.5 16.508h1c.46 0 .833-.373.833-.833v-1a.833.833 0 0 0-.833-.833h-1a.833.833 0 0 0-.834.833v1c0 .46.373.833.834.833ZM8.5 4.217h1c.46 0 .833-.373.833-.834v-1A.833.833 0 0 0 9.5 1.55h-1a.833.833 0 0 0-.834.833v1c0 .46.373.834.834.834ZM14.717 8.392h1c.46 0 .833-.373.833-.834v-1a.833.833 0 0 0-.834-.833h-1a.833.833 0 0 0-.833.833v1c0 .46.373.834.834.834ZM2.35 8.392h1c.46 0 .834-.373.834-.834v-1a.833.833 0 0 0-.834-.833h-1a.833.833 0 0 0-.833.833v1c0 .46.373.834.833.834Z"
    />
  </svg>
);
export default SvgDefineAlternateComponentIcon;
