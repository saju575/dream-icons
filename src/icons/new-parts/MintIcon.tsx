import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMintIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 22"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8 16c.227 0 .438-.106.86-.318l3.39-1.704c1.5-.754 2.25-1.131 2.25-1.728v-7.5M8 16c-.227 0-.438-.106-.86-.318l-3.39-1.704c-1.5-.754-2.25-1.131-2.25-1.728v-7.5M8 16V8.5m6.5-3.75c0-.597-.75-.974-2.25-1.728L8.86 1.318C8.438 1.106 8.227 1 8 1s-.438.106-.86.318L3.75 3.022C2.25 3.776 1.5 4.153 1.5 4.75m13 0c0 .597-.75.974-2.25 1.728L8.86 8.182c-.422.212-.633.318-.86.318M1.5 4.75c0 .597.75.974 2.25 1.728l3.39 1.704c.422.212.633.318.86.318M6 19.75c0-.69.56-1.25 1.25-1.25h1.5c.69 0 1.25.56 1.25 1.25m-4 0c0 .69.56 1.25 1.25 1.25h1.5c.69 0 1.25-.56 1.25-1.25m-4 0H1m9 0h5"
    />
  </svg>
);
export default SvgMintIcon;
