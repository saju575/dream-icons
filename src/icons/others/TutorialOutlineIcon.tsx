import type { SVGProps } from "react";
import React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const TutorialOutlineIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 22 22"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M1.5 6h19m-19 10h19M11 16V6M7 6V2m8 4V2M7 20v-4m8 4v-4M1.5 11c0-4.478 0-6.718 1.391-8.109S6.521 1.5 11 1.5c4.478 0 6.718 0 8.109 1.391S20.5 6.521 20.5 11c0 4.478 0 6.718-1.391 8.109S15.479 20.5 11 20.5c-4.478 0-6.718 0-8.109-1.391S1.5 15.479 1.5 11"
    />
  </svg>
);
export default TutorialOutlineIcon;
