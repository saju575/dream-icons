import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgScaleIcon = ({
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
      d="M8.1 3.211V1.59M8.1.5l-.63 1.04h1.266zM13.838 4.343 12.41 5.708M14.648 3.578l-1.221.306.893.85zM13.863 11.65l-1.452-1.382M14.667 12.422l-.322-1.163-.893.85zM8.1 14.41V12.79M8.1 15.5l.636-1.04H7.47zM3.659 10.45l-1.272 1.213M1.577 12.434l1.221-.313-.893-.85zM3.608 5.647 2.143 4.25M1.333 3.48l.328 1.163.886-.85z"
    />
  </svg>
);
export default SvgScaleIcon;
