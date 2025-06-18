import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LinkIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 20"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m7.5 12.5 5-5m2.346 5.11 2.61-2.61A5.272 5.272 0 1 0 10 2.544l-2.61 2.61m5.22 9.692L10 17.456A5.271 5.271 0 1 1 2.544 10l2.61-2.61"
    />
  </svg>
);
export default LinkIcon;
