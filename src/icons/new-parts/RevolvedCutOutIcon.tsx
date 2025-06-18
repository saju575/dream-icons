import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRevolvedCutOutIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 14 14"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.813 4.513C2.093 4.187.953 3.6.953 2.933c0-1.026 2.707-1.86 6.053-1.86s6.054.834 6.054 1.86c0 .654-1.094 1.227-2.74 1.56M3.813 12.72c-1.72-.327-2.86-.914-2.86-1.58 0-1.027 2.707-1.86 6.053-1.86s6.054.833 6.054 1.86c0 .653-1.094 1.226-2.74 1.56M13.053 2.933v8.2M.946 2.933v8.2M7 9.273V3.906"
    />
  </svg>
);
export default SvgRevolvedCutOutIcon;
