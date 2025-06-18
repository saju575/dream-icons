import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRotationalMotorIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 18 18"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.2}
      d="M6.292 15.967A7.47 7.47 0 0 1 1.533 9"
    />
    <path
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={1.2}
      d="m6.167 16.738.372-1.703 1.289 1.175z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.2}
      d="M11.708 2.033A7.47 7.47 0 0 1 16.466 9"
    />
    <path
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={1.2}
      d="m11.834 1.262-.373 1.703-1.289-1.175z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.2}
      d="M10.5 5.8H7.49c-.934 0-1.691.757-1.691 1.692V10.5c0 .934.757 1.692 1.691 1.692H10.5c.934 0 1.691-.758 1.691-1.692V7.492c0-.935-.757-1.692-1.691-1.692Z"
    />
  </svg>
);
export default SvgRotationalMotorIcon;
