import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHole2AltIcon = ({
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
      d="M13.053 3.107v8.206M.946 3.107v8.206M7 4.767c3.343 0 6.053-.836 6.053-1.867 0-1.03-2.71-1.867-6.053-1.867S.946 1.87.946 2.9 3.656 4.767 7 4.767M7 13.033c3.343 0 6.053-.835 6.053-1.866S10.343 9.3 7 9.3s-6.054.836-6.054 1.867c0 1.03 2.71 1.866 6.054 1.866"
    />
  </svg>
);
export default SvgHole2AltIcon;
