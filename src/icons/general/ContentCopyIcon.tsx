import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const ContentCopyIcon = ({
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
      d="M6 16q-.824 0-1.412-.588A1.93 1.93 0 0 1 4 14V2q0-.824.588-1.412A1.93 1.93 0 0 1 6 0h9q.824 0 1.413.588Q17 1.175 17 2v12q0 .825-.587 1.412A1.93 1.93 0 0 1 15 16zm0-2h9V2H6zm-4 6q-.824 0-1.412-.587A1.93 1.93 0 0 1 0 18V5q0-.424.288-.713A.97.97 0 0 1 1 4q.424 0 .712.287Q2 4.576 2 5v13h10q.424 0 .713.288.287.287.287.712 0 .424-.287.712A.97.97 0 0 1 12 20z"
    />
  </svg>
);
export default ContentCopyIcon;
