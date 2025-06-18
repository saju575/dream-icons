import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTagIcon = ({
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
    <g stroke="currentColor" strokeWidth={1.5} clipPath="url(#tag-icon_svg__a)">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.583 4.167a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5"
      />
      <path d="M2.312 9.287c-.836.933-.854 2.342-.087 3.333a28.3 28.3 0 0 0 5.156 5.155c.99.767 2.4.75 3.333-.087a77 77 0 0 0 7.096-7.248c.222-.258.36-.574.391-.912.138-1.496.42-5.807-.75-6.978-1.171-1.171-5.482-.888-6.979-.751-.338.031-.654.17-.912.391a77 77 0 0 0-7.248 7.097Z" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m5.833 11.667 2.5 2.5"
      />
    </g>
    <defs>
      <clipPath id="tag-icon_svg__a">
        <path fill="currentColor" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTagIcon;
