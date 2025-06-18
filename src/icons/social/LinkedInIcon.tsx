import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LinkedInIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 11 11"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M2.79 3.45H.725v6.585H2.79zM8.376 3.307a4 4 0 0 0-.238-.019 2.41 2.41 0 0 0-2.127 1.061v-.88H4.037v6.585H6.1V6.96c0-.447-.033-.923.19-1.332.191-.343.534-.514.92-.514 1.141 0 1.165 1.033 1.165 1.128v3.84h2.065V5.785c0-1.47-.747-2.336-2.065-2.479M1.758 2.598a1.199 1.199 0 1 0 0-2.398 1.199 1.199 0 0 0 0 2.398"
    />
  </svg>
);
export default LinkedInIcon;
