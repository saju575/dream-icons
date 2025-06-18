import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTangentCircleIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 20"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.2}
      d="M2.283 9.817c1.225 0 2.217.992 2.217 2.217v3.358c0 1.225.992 2.217 2.217 2.217l3.291-.042v-5.75M13.133 17.609a2.216 2.216 0 0 0 2.217-2.217v-3.358c0-1.225.991-2.217 2.216-2.217"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.2}
      d="M10 11.817A3.758 3.758 0 1 0 10 4.3a3.758 3.758 0 0 0 0 7.517Z"
    />
  </svg>
);
export default SvgTangentCircleIcon;
