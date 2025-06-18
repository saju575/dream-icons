import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const MicIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 18 23"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.399 1.82H9.39a4.495 4.495 0 0 0-4.495 4.495v3.96a4.495 4.495 0 0 0 4.495 4.496H9.4a4.495 4.495 0 0 0 4.495-4.495V6.315A4.495 4.495 0 0 0 9.399 1.82M10.168 6.38h3.49M10.087 10.21h3.799"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1.793 10.39c-.202 4.308 3.248 7.96 7.484 8.026 4.285.064 7.873-3.58 7.719-7.946M6.135 21.21h6.552M9.43 18.416v2.624"
    />
  </svg>
);
export default MicIcon;
