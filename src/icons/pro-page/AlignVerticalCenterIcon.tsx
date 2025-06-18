import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const AlignVerticalCenterIcon = ({
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
      d="M5.097 13.167q-.24 0-.42-.18a.57.57 0 0 1-.18-.42V7.335h-3.33a.324.324 0 0 1-.333-.33.33.33 0 0 1 .096-.239.32.32 0 0 1 .237-.098h3.33V1.433q0-.24.18-.42t.42-.18.42.18.18.42v5.234h4.108V3.683q0-.24.18-.42t.42-.18.42.18.179.42v2.984h3.83a.324.324 0 0 1 .333.33.33.33 0 0 1-.095.238.32.32 0 0 1-.238.098h-3.83v2.985q0 .24-.18.42-.18.179-.42.179t-.42-.18a.57.57 0 0 1-.179-.42V7.334H5.696v5.235q0 .24-.18.42-.179.179-.42.179"
    />
  </svg>
);
export default AlignVerticalCenterIcon;
