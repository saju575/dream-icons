import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const NewspaperIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 18"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M2 18q-.824 0-1.412-.587A1.93 1.93 0 0 1 0 16V.6Q0 .425.15.363.3.3.425.425l.9.9a.48.48 0 0 0 .7 0l.95-.975a.48.48 0 0 1 .7 0l.975.975a.48.48 0 0 0 .7 0L6.325.35a.48.48 0 0 1 .7 0l.95.975a.48.48 0 0 0 .7 0L9.65.35a.48.48 0 0 1 .7 0l.975.975a.48.48 0 0 0 .7 0l.95-.975a.48.48 0 0 1 .7 0l.975.975a.48.48 0 0 0 .7 0l.975-.975a.48.48 0 0 1 .7 0l.95.975a.48.48 0 0 0 .7 0l.9-.9Q19.7.3 19.85.363 20 .424 20 .6V16q0 .824-.587 1.413A1.93 1.93 0 0 1 18 18zm0-2h7v-6H2zm9 0h7v-2h-7zm0-4h7v-2h-7zM2 8h16V5H2z"
    />
  </svg>
);
export default NewspaperIcon;
