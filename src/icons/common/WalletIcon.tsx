import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgWalletIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 21 20"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7.205 9.05h12.033v4.256a5.326 5.326 0 0 1-5.33 5.332H6.568a5.33 5.33 0 0 1-5.33-5.332V8.272c0-2.939 1.515-5.27 4.454-5.27"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18.064 6.013a5 5 0 0 1-1.03 3.038H9.123a4.9 4.9 0 0 1-1.03-3.038c0-2.75 2.23-4.99 4.99-4.99s4.99 2.24 4.99 4.99zM14.293 15.269a1.684 1.684 0 1 0 0-3.369 1.684 1.684 0 0 0 0 3.369"
    />
  </svg>
);
export default SvgWalletIcon;
