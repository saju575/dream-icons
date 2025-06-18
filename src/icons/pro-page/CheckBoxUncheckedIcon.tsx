import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const CheckBoxUncheckedIcon = ({
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
      fill="currentColor"
      d="M13 13.833H3A.836.836 0 0 1 2.167 13V3c0-.458.375-.833.833-.833h10c.458 0 .833.375.833.833v10a.836.836 0 0 1-.833.833M13.833.5H2.167C1.25.5.5 1.25.5 2.167v11.666c0 .917.75 1.667 1.667 1.667h11.666c.917 0 1.667-.75 1.667-1.667V2.167C15.5 1.25 14.75.5 13.833.5"
    />
  </svg>
);
export default CheckBoxUncheckedIcon;
