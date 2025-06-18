import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const AlignJustifySpaceEvenIcon = ({
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
      d="M11.007 11.584a.57.57 0 0 1-.42-.17.57.57 0 0 1-.17-.42V5.007a.57.57 0 0 1 .17-.42.57.57 0 0 1 .42-.17h-.013a.57.57 0 0 1 .42.17.57.57 0 0 1 .17.42v5.987a.57.57 0 0 1-.17.42.57.57 0 0 1-.42.17zm-6 0a.57.57 0 0 1-.42-.17.57.57 0 0 1-.17-.42V5.007a.57.57 0 0 1 .17-.42.57.57 0 0 1 .42-.17h-.013a.57.57 0 0 1 .42.17.57.57 0 0 1 .17.42v5.987a.57.57 0 0 1-.17.42.57.57 0 0 1-.42.17zm9.83 3.583a.33.33 0 0 1-.238-.096.32.32 0 0 1-.098-.237V1.167a.324.324 0 0 1 .33-.334.33.33 0 0 1 .238.096.32.32 0 0 1 .098.238v13.667a.324.324 0 0 1-.33.333m-13.666 0a.33.33 0 0 1-.238-.096.32.32 0 0 1-.099-.237V1.167a.324.324 0 0 1 .33-.334.33.33 0 0 1 .238.096.32.32 0 0 1 .099.238v13.667a.324.324 0 0 1-.33.333"
    />
  </svg>
);
export default AlignJustifySpaceEvenIcon;
