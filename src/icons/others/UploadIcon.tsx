import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const UploadIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 14"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M8 .75v8.333M8 .75c-.583 0-1.673 1.662-2.083 2.083M8 .75c.583 0 1.673 1.662 2.083 2.083m4.584 7.917c0 2.068-.432 2.5-2.5 2.5H3.833c-2.068 0-2.5-.432-2.5-2.5"
    />
  </svg>
);
export default UploadIcon;
