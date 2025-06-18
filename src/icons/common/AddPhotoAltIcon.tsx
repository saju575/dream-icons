import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const AddPhotoAltIcon = ({
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
      fill="currentColor"
      d="M2.167 15.5q-.688 0-1.177-.49a1.6 1.6 0 0 1-.49-1.177V2.167Q.5 1.479.99.99 1.479.5 2.167.5h7.5v1.667h-7.5v11.666h11.666v-7.5H15.5v7.5q0 .688-.49 1.177-.489.49-1.177.49zm10-10V3.833H10.5V2.167h1.667V.5h1.666v1.667H15.5v1.666h-1.667V5.5zM3 12.167h10L9.875 8l-2.5 3.333-1.875-2.5z"
    />
  </svg>
);
export default AddPhotoAltIcon;
