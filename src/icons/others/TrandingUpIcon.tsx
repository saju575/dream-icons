import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const TrandingUpIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 12"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M.7 11.625a.93.93 0 0 1-.288-.713.98.98 0 0 1 .288-.687l5.275-5.35Q6.55 4.3 7.4 4.3t1.425.575l2.575 2.6 5.2-5.15H15a.97.97 0 0 1-.713-.288.97.97 0 0 1-.287-.712q0-.424.287-.713A.97.97 0 0 1 15 .325h4q.424 0 .712.287Q20 .9 20 1.325v4q0 .424-.288.712a.97.97 0 0 1-.712.288.97.97 0 0 1-.712-.288.97.97 0 0 1-.288-.712v-1.6L12.825 8.9q-.575.575-1.425.575T9.975 8.9L7.4 6.325l-5.3 5.3a.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275"
    />
  </svg>
);
export default TrandingUpIcon;
