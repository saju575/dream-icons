import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgInvokeIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 17 12"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeMiterlimit={10}
      d="M8.068 1.011c-.444-.03-.787.35-.787.795v7.972c0 .445.341.824.785.795 2.555-.162 4.595-2.218 4.699-4.564.111-2.494-1.985-4.816-4.697-4.998Z"
    />
    <path
      fill="currentColor"
      d="M1.37 3.05a.5.5 0 0 0 0 1zm5.912 0H1.369v1h5.913zM1.37 7.533a.5.5 0 0 0 0 1zm5.912 0H1.369v1h5.913z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      d="M12.766 5.788h3.603"
    />
  </svg>
);
export default SvgInvokeIcon;
