import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const BoltOutlineIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 13 18"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M5.55 15.2 10.725 9h-4l.725-5.675L2.825 10H6.3zm-.973-3.7H1.534a.78.78 0 0 1-.738-.446.77.77 0 0 1 .058-.86L7.405.742q.202-.282.516-.386a.98.98 0 0 1 .652.017q.338.12.495.414t.116.632L8.432 7.5h3.731q.535 0 .754.48t-.129.892l-7.244 8.677a1 1 0 0 1-.53.334.9.9 0 0 1-.612-.061 1 1 0 0 1-.463-.417.97.97 0 0 1-.124-.62z"
    />
  </svg>
);
export default BoltOutlineIcon;
