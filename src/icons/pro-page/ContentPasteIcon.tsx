import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const ContentPasteIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 14 15"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M1.68 14.667q-.555 0-.95-.396a1.3 1.3 0 0 1-.396-.95V2.678q0-.555.395-.95.396-.396.951-.396h3.864q.117-.49.52-.821Q6.464.179 7 .179q.545 0 .944.333.401.333.517.821h3.86q.554 0 .95.396.396.395.395.95V13.32q0 .556-.395.951-.396.395-.95.395zm0-.834h10.641a.5.5 0 0 0 .353-.16.5.5 0 0 0 .16-.353V2.68a.5.5 0 0 0-.16-.353.5.5 0 0 0-.353-.16h-1.987v1.185a.655.655 0 0 1-.667.673H4.334a.655.655 0 0 1-.666-.673V2.166H1.68a.5.5 0 0 0-.352.16.5.5 0 0 0-.16.353V13.32a.5.5 0 0 0 .16.353.5.5 0 0 0 .352.16M7.003 2.36a.659.659 0 0 0 .67-.676.66.66 0 0 0-.676-.67.66.66 0 0 0-.67.676q0 .286.195.478a.66.66 0 0 0 .481.192"
    />
  </svg>
);
export default ContentPasteIcon;
