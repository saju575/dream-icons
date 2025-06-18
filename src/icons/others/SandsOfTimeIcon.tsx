import type { SVGProps } from "react";
import React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SandsOfTimeIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 31 36"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M.668 1.75A1.25 1.25 0 0 1 1.918.5h27.5a1.25 1.25 0 0 1 0 2.5h-2.5v2.5a11.25 11.25 0 0 1-6.392 10.15c-.726.348-1.108.943-1.108 1.475v1.75c0 .532.385 1.128 1.108 1.475a11.25 11.25 0 0 1 6.392 10.15V33h2.5a1.25 1.25 0 0 1 0 2.5h-27.5a1.25 1.25 0 0 1 0-2.5h2.5v-2.5a11.25 11.25 0 0 1 6.392-10.15c.726-.348 1.108-.943 1.108-1.475v-1.75c0-.532-.385-1.127-1.107-1.475A11.25 11.25 0 0 1 4.417 5.5V3h-2.5a1.25 1.25 0 0 1-1.25-1.25M6.918 3v2.5a8.75 8.75 0 0 0 4.972 7.895c1.333.64 2.528 1.978 2.528 3.727v1.756c0 1.75-1.195 3.087-2.527 3.727A8.75 8.75 0 0 0 6.917 30.5V33h17.5v-2.5a8.75 8.75 0 0 0-4.972-7.895c-1.333-.64-2.528-1.975-2.528-3.727v-1.756c0-1.75 1.195-3.087 2.528-3.727A8.75 8.75 0 0 0 24.418 5.5V3z"
    />
  </svg>
);
export default SandsOfTimeIcon;
