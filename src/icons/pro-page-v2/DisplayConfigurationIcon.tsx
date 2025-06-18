import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDisplayConfigurationIcon = ({
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
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M9.791 2.525h-4.75a2.497 2.497 0 0 0-2.5 2.5v5.742c0 1.383 1.117 2.5 2.5 2.5h10.008c1.384 0 2.5-1.117 2.5-2.5V5.025c0-1.383-1.116-2.5-2.5-2.5zM10 13.267v5.066"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M11.984 17.508H8.018"
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M12.01 6.108h-1.784a.833.833 0 0 0-.833.834v1.783c0 .46.373.833.833.833h1.783c.46 0 .834-.373.834-.833V6.942a.833.833 0 0 0-.834-.834Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M12.842 7.9h1.583M5.574 7.9h3.817"
    />
  </svg>
);
export default SvgDisplayConfigurationIcon;
