import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const AlignVerticalTopIcon = ({
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
      d="M5.177 13.75q-.24 0-.42-.18a.57.57 0 0 1-.18-.42V3.48q0-.24.18-.42.18-.179.42-.179t.42.18.18.42v9.67q0 .24-.18.42t-.42.179m5.647-5q-.24 0-.42-.18a.57.57 0 0 1-.179-.42V3.48q0-.24.18-.42.18-.179.42-.179t.42.18.179.42v4.67q0 .24-.18.42t-.42.179M1.167.9A.325.325 0 0 1 .834.573a.33.33 0 0 1 .333-.338h13.667a.325.325 0 0 1 .333.329.33.33 0 0 1-.333.338z"
    />
  </svg>
);
export default AlignVerticalTopIcon;
