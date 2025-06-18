import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const AlignVerticalBottomIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 14"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M1.167 13.75a.325.325 0 0 1-.333-.329.33.33 0 0 1 .333-.338h13.667a.325.325 0 0 1 .333.33.33.33 0 0 1-.333.337zm4.01-2.648q-.24 0-.42-.179a.58.58 0 0 1-.18-.42V.833q0-.24.18-.42t.42-.18.42.18.18.42v9.67q0 .24-.18.42t-.42.18m5.647 0q-.24 0-.42-.179a.58.58 0 0 1-.179-.42v-4.67q0-.24.18-.42t.42-.18.42.18.179.42v4.67q0 .24-.18.42t-.42.18"
    />
  </svg>
);
export default AlignVerticalBottomIcon;
