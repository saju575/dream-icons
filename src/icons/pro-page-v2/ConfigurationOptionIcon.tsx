import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgConfigurationOptionIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 18 16"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M15.65 6.275H8.11a.833.833 0 0 0-.834.833v1.784c0 .46.373.833.834.833h7.541c.46 0 .834-.373.834-.833V7.108a.833.833 0 0 0-.834-.833Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="m11.767 3.675.266-1.167A1.5 1.5 0 0 0 10.9.708a1.506 1.506 0 0 0-1.808 1.134l-.042.166a1.21 1.21 0 0 1-.983.925H8.05A1.2 1.2 0 0 1 6.892 2.5l-.259-.325a1.51 1.51 0 0 0-2.116-.242 1.51 1.51 0 0 0-.242 2.117l.108.133c.309.384.342.909.117 1.342q.002.002-.008.017c-.209.4-.617.641-1.067.641h-.417a1.508 1.508 0 1 0 0 3.017h.175c.492 0 .925.3 1.117.75v.017c.175.408.117.883-.167 1.233l-.258.325c-.517.65-.408 1.6.233 2.117.65.516 1.6.408 2.117-.242l.108-.133a1.21 1.21 0 0 1 1.292-.409h.017c.425.117.75.467.85.892l.091.4a1.51 1.51 0 0 0 1.809 1.133 1.51 1.51 0 0 0 1.133-1.8l-.233-1.016"
    />
  </svg>
);
export default SvgConfigurationOptionIcon;
