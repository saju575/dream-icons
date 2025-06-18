import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const FolderOutlineIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 28 28"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M19.833 26.542H8.166c-5.145 0-6.708-1.564-6.708-6.709V8.167c0-5.145 1.563-6.709 6.708-6.709h1.75c2.042 0 2.684.665 3.5 1.75l1.75 2.334c.385.513.444.583 1.167.583h3.5c5.145 0 6.708 1.563 6.708 6.708v7c0 5.145-1.563 6.709-6.708 6.709M8.166 3.208c-4.176 0-4.958.794-4.958 4.959v11.666c0 4.165.782 4.959 4.958 4.959h11.667c4.177 0 4.958-.794 4.958-4.959v-7c0-4.165-.781-4.958-4.958-4.958h-3.5c-1.493 0-1.983-.513-2.567-1.283l-1.75-2.334c-.606-.805-.793-1.05-2.1-1.05z"
    />
    <path
      fill="currentColor"
      d="M23.333 8.318a.88.88 0 0 1-.875-.875v-1.61c0-1.843-.782-2.625-2.625-2.625h-10.5a.88.88 0 0 1-.875-.875c0-.478.397-.875.875-.875h10.5c2.823 0 4.375 1.552 4.375 4.375v1.61a.88.88 0 0 1-.875.875"
    />
  </svg>
);
export default FolderOutlineIcon;
