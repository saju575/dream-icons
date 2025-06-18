import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const WarningFillIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 22"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M14.682 1.871c-1.177-2.05-4.188-2.05-5.364 0L.733 16.837c-1.154 2.011.328 4.496 2.682 4.496h17.17c2.354 0 3.836-2.485 2.682-4.496zM12 5.583c-.644 0-1.167.523-1.167 1.167v7a1.167 1.167 0 1 0 2.334 0v-7c0-.644-.523-1.167-1.167-1.167m0 10.5a1.167 1.167 0 1 0 0 2.334 1.167 1.167 0 0 0 0-2.334"
      clipRule="evenodd"
    />
  </svg>
);
export default WarningFillIcon;
