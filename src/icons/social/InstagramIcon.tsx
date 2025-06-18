import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const InstagramIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 9 10"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M7.32 9.376H1.68A1.42 1.42 0 0 1 .265 7.961V2.32C.265 1.543.9.907 1.68.907h5.64c.779 0 1.415.636 1.415 1.416V7.96c0 .782-.633 1.415-1.416 1.415"
    />
    <path
      fill="#4A4450"
      d="M4.502 7.317a2.16 2.16 0 0 1-1.538-.636 2.16 2.16 0 0 1-.636-1.538c0-.581.226-1.127.636-1.538a2.16 2.16 0 0 1 1.538-.636c.58 0 1.127.226 1.537.636s.637.957.637 1.538a2.16 2.16 0 0 1-.637 1.538c-.414.41-.956.636-1.537.636m0-3.886a1.713 1.713 0 0 0 0 3.423c.943 0 1.711-.765 1.711-1.711A1.717 1.717 0 0 0 4.502 3.43M7.1 2.897a.417.417 0 1 0 0-.835.417.417 0 0 0 0 .835"
    />
  </svg>
);
export default InstagramIcon;
