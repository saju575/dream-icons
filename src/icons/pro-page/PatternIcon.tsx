import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPatternIcon = ({
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
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M15.632 1.517H13.85a.833.833 0 0 0-.833.833v1.783c0 .46.373.834.833.834h1.783c.46 0 .834-.373.834-.834V2.35a.833.833 0 0 0-.834-.833ZM4.15 13.058H2.367a.833.833 0 0 0-.834.834v1.783c0 .46.373.833.834.833H4.15c.46 0 .833-.373.833-.833v-1.783a.833.833 0 0 0-.833-.834ZM15.632 13.058H13.85a.833.833 0 0 0-.833.834v1.783c0 .46.373.833.833.833h1.783c.46 0 .834-.373.834-.833v-1.783a.833.833 0 0 0-.834-.834ZM4.15 1.517H2.367a.833.833 0 0 0-.834.833v1.783c0 .46.373.834.834.834H4.15c.46 0 .833-.373.833-.834V2.35a.833.833 0 0 0-.833-.833Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="m13.024 13.058-2.542-2.575M7.534 7.517 4.992 4.958"
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M9.892 7.275H8.11a.833.833 0 0 0-.834.833v1.784c0 .46.373.833.834.833h1.783c.46 0 .833-.373.833-.833V8.108a.833.833 0 0 0-.833-.833Z"
    />
  </svg>
);
export default SvgPatternIcon;
