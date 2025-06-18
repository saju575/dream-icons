import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPlaySkipBackIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 12 12"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.333 1.333v9.334M.71 6.417c.169.808 1.072 1.388 2.876 2.548 1.964 1.262 2.945 1.894 3.74 1.65.269-.082.517-.226.726-.423.614-.58.614-1.784.614-4.192s0-3.612-.614-4.192a1.9 1.9 0 0 0-.726-.423c-.795-.244-1.776.388-3.74 1.65C1.782 4.195.88 4.775.71 5.583c-.058.274-.058.56 0 .834"
    />
  </svg>
);
export default SvgPlaySkipBackIcon;
