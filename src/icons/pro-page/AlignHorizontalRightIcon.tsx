import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const AlignHorizontalRightIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 14 16"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M13.197 15.167a.33.33 0 0 1-.338-.333V1.167a.325.325 0 0 1 .33-.334.33.33 0 0 1 .337.334v13.667a.325.325 0 0 1-.33.333m-7.123-3.744q-.24 0-.42-.18a.57.57 0 0 1-.18-.42q0-.24.18-.42.18-.178.42-.178h4.205q.24 0 .42.179.18.18.18.42t-.18.42q-.18.18-.42.18zm-5-5.647q-.24 0-.42-.18a.58.58 0 0 1-.18-.42q0-.24.18-.42t.42-.179h9.205q.24 0 .42.18t.18.42-.18.42q-.18.179-.42.179z"
    />
  </svg>
);
export default AlignHorizontalRightIcon;
