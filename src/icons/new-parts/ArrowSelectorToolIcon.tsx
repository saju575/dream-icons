import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowSelectorToolIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 11 16"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="m1.667 9.458 1.646-2.291h3.541L1.667 3.083zm5.958 6.355q-.48.229-.958.052a1.24 1.24 0 0 1-.709-.657l-2.5-5.375-1.937 2.709q-.354.5-.938.312Q0 12.666 0 12.063V1.375q0-.52.469-.75t.885.104l8.417 6.625q.48.354.281.917-.198.562-.802.562h-3.5l2.48 5.313q.229.48.051.958a1.24 1.24 0 0 1-.656.709"
    />
  </svg>
);
export default SvgArrowSelectorToolIcon;
