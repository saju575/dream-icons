import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMessageIcon = ({
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.228 15.076c-.28.189-.576.363-.88.53-.143.083-.287.174-.355.34-.16.402.06.781.523.872.901.197 1.81.326 2.742.31.66-.015 1.318-.09 1.924-.265"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.228 15.083a6.14 6.14 0 0 1-1.811-4.348V9.34a6.145 6.145 0 0 1 6.152-6.144h2.704a6.143 6.143 0 0 1 6.144 6.144v1.394a6.15 6.15 0 0 1-6.144 6.151H8.57c-.13 0-.258 0-.387-.015"
    />
    <path
      fill="currentColor"
      d="M6.849 10.97a.81.81 0 1 0 0-1.622.81.81 0 0 0 0 1.621M9.917 10.97a.81.81 0 1 0 0-1.622.81.81 0 0 0 0 1.621M12.978 10.97a.81.81 0 1 0 0-1.622.81.81 0 0 0 0 1.621"
    />
  </svg>
);
export default SvgMessageIcon;
