import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const FacebookIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 7 11"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M4.156 5.945v4.137h-1.9V5.946H.675V4.268h1.58v-.61C2.255 1.392 3.201.2 5.203.2c.614 0 .768.099 1.104.18v1.659c-.376-.066-.482-.103-.873-.103-.464 0-.713.132-.94.391q-.34.39-.34 1.352v.593h2.153l-.577 1.677H4.156z"
    />
  </svg>
);
export default FacebookIcon;
