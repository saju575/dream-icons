import type { SVGProps } from "react";
import React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const CloseIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 18 17"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M9 6.6 15.234.365a1 1 0 0 1 1.414 0l.236.236a1 1 0 0 1 0 1.414L10.649 8.25l6.235 6.234a1 1 0 0 1 0 1.414l-.236.236a1 1 0 0 1-1.414 0L9 9.899l-6.235 6.235a1 1 0 0 1-1.414 0l-.236-.236a1 1 0 0 1 0-1.414L7.35 8.25 1.115 2.015a1 1 0 0 1 0-1.414l.236-.236a1 1 0 0 1 1.414 0z"
    />
  </svg>
);
export default CloseIcon;
