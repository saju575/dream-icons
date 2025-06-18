import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const ConfigurationIcon = ({
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
      d="m15.942 5.217-1.45.841a1.21 1.21 0 0 1-1.35-.091l-.009-.009a1.2 1.2 0 0 1-.466-1.141l.058-.409A1.5 1.5 0 0 0 11.45 2.7a1.506 1.506 0 0 0-1.708 1.275l-.025.167a1.23 1.23 0 0 1-.909 1h-.016A1.19 1.19 0 0 1 7.608 4.8l-.291-.308a1.5 1.5 0 0 0-2.125-.075 1.51 1.51 0 0 0-.075 2.133l.141.15c.334.35.417.867.225 1.308v.017a1.2 1.2 0 0 1-1.016.725l-.442.033A1.503 1.503 0 0 0 2.642 10.4c.066.825.791 1.45 1.616 1.383l.175-.016c.492-.042.942.225 1.175.658v.017c.209.391.184.875-.066 1.241l-.234.342a1.51 1.51 0 0 0 .4 2.092 1.5 1.5 0 0 0 2.092-.4l.1-.142c.275-.408.775-.6 1.258-.508h.017c.442.083.792.4.925.825l.125.391a1.513 1.513 0 0 0 1.883.992 1.513 1.513 0 0 0 .992-1.883l-.05-.159a1.21 1.21 0 0 1 .383-1.291l.009-.009a1.21 1.21 0 0 1 1.233-.208l1.783.692M11.857 10h5.75"
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      d="M10.666 8.342H8.999a.833.833 0 0 0-.833.833v1.667c0 .46.373.833.833.833h1.667c.46 0 .833-.373.833-.833V9.175a.833.833 0 0 0-.833-.833Z"
    />
  </svg>
);
export default ConfigurationIcon;
