import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFilePresentIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 14 18"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M7 14.833q1.395 0 2.364-.979a3.23 3.23 0 0 0 .969-2.354V9a.8.8 0 0 0-.24-.594.8.8 0 0 0-.593-.24.8.8 0 0 0-.594.24.8.8 0 0 0-.24.594v2.5q0 .687-.479 1.177-.48.49-1.187.49-.688 0-1.177-.49a1.6 1.6 0 0 1-.49-1.177V6.917a.4.4 0 0 1 .125-.303.42.42 0 0 1 .292-.114q.187 0 .302.114a.4.4 0 0 1 .114.303v3.75q0 .354.24.593.24.24.594.24t.593-.24q.24-.24.24-.594v-3.75q0-.874-.604-1.479a2.01 2.01 0 0 0-1.48-.604q-.875 0-1.478.604a2.01 2.01 0 0 0-.605 1.48V11.5q0 1.374.98 2.354a3.2 3.2 0 0 0 2.354.98m-5 2.5q-.688 0-1.177-.49a1.6 1.6 0 0 1-.49-1.177V2.333q0-.687.49-1.177Q1.312.666 2 .666h7.5l4.166 4.167v10.834q0 .687-.49 1.177-.489.49-1.176.49zm0-1.666h10v-10H9.5a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.594v-2.5H2z"
    />
  </svg>
);
export default SvgFilePresentIcon;
