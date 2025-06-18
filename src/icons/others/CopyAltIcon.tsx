import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const CopyAltIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 10c0-1.885 0-2.829.586-3.414C7.171 6 8.115 6 10 6h.667c1.885 0 2.828 0 3.414.586.586.585.586 1.529.586 3.414v.667c0 1.885 0 2.828-.586 3.414s-1.529.586-3.414.586H10c-1.885 0-2.829 0-3.414-.586C6 13.495 6 12.552 6 10.667z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.333 6c-.002-1.971-.031-2.993-.605-3.692a2.7 2.7 0 0 0-.37-.37c-.738-.605-1.833-.605-4.025-.605-2.191 0-3.287 0-4.025.606q-.203.166-.37.369c-.605.739-.605 1.833-.605 4.025s0 3.288.606 4.026q.166.203.369.369c.7.573 1.72.604 3.692.605"
    />
  </svg>
);
export default CopyAltIcon;
