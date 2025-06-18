import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMultipleAirwireIcon = ({
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
      d="M12.15 2.5v4.583l3.184 3.175.083 3.075"
    />
    <path
      fill="currentColor"
      d="M8.033 2.5a.5.5 0 0 0-1 0zm-.5 4.583.353.354.147-.146v-.208zM4.35 10.258l-.353-.354-.147.147v.207zM7.033 2.5v4.583h1V2.5zm.147 4.23L3.997 9.903l.706.708 3.183-3.175zm-3.33 3.528V14.3h1v-4.042z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      d="M9.967 2.5v11.342"
    />
    <path
      stroke="currentColor"
      strokeMiterlimit={10}
      d="M4.317 17.492a1.817 1.817 0 1 0 0-3.634 1.817 1.817 0 0 0 0 3.634ZM9.983 17.492a1.817 1.817 0 1 0 0-3.633 1.817 1.817 0 0 0 0 3.633ZM15.334 17.492a1.817 1.817 0 1 0 0-3.633 1.817 1.817 0 0 0 0 3.633Z"
    />
  </svg>
);
export default SvgMultipleAirwireIcon;
