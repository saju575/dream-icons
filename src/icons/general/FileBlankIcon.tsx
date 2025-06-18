import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const FileBlankIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 17 20"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M2.516 20q-.825 0-1.413-.587A1.93 1.93 0 0 1 .516 18V2q0-.824.587-1.412A1.93 1.93 0 0 1 2.516 0H9.69a1.97 1.97 0 0 1 1.4.575l4.85 4.85q.275.275.425.638.15.361.15.762V18q0 .824-.588 1.413a1.93 1.93 0 0 1-1.412.587zm7-14V2h-7v16h12V7h-4a.97.97 0 0 1-.713-.287A.97.97 0 0 1 9.516 6"
    />
  </svg>
);
export default FileBlankIcon;
