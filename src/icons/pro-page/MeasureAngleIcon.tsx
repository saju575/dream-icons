import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMeasureAngleIcon = ({
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
      d="M6.156 2.052a6.7 6.7 0 0 1 1.32.944c.126-.43.253-.866.38-1.295-.592.06-1.159.18-1.7.351M13.217 9.214q.257-.825.347-1.724c-.423.128-.854.257-1.277.386.347.386.66.832.93 1.338M8.213 2.519c2.04.91 3.691 2.502 4.634 4.47M4.71.5.5 15.5M15.5 10.354.5 15.5"
    />
  </svg>
);
export default SvgMeasureAngleIcon;
