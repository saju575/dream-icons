import type { SVGProps } from "react";
import React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DollarBagIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 36 36"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeWidth={2}
      d="M24.665 8c0-3.143 0-4.713-.976-5.69-.977-.977-2.547-.977-5.69-.977s-4.714 0-5.69.977c-.977.977-.977 2.547-.977 5.69m-10 13.333c0-6.285 0-9.428 1.953-11.38S8.38 8 14.665 8h6.667c6.285 0 9.428 0 11.38 1.953s1.953 5.095 1.953 11.38 0 9.429-1.953 11.38-5.095 1.954-11.38 1.954h-6.667c-6.285 0-9.428 0-11.38-1.954s-1.953-5.095-1.953-11.38Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
      d="M17.997 26.888c1.842 0 3.334-1.243 3.334-2.776 0-1.534-1.492-2.779-3.334-2.779-1.841 0-3.333-1.243-3.333-2.778 0-1.533 1.492-2.777 3.333-2.777m0 11.11c-1.841 0-3.333-1.243-3.333-2.776m3.333 2.776V28m0-12.222v-1.111m0 1.111c1.842 0 3.334 1.244 3.334 2.777"
    />
  </svg>
);
export default DollarBagIcon;
