import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const ShoppingCartIcon = ({
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
    <path
      fill="currentColor"
      d="M6 20q-.824 0-1.412-.587A1.93 1.93 0 0 1 4 18q0-.824.588-1.413A1.93 1.93 0 0 1 6 16q.824 0 1.412.587Q8 17.176 8 18q0 .824-.588 1.413A1.93 1.93 0 0 1 6 20m10 0q-.825 0-1.412-.587A1.93 1.93 0 0 1 14 18q0-.824.588-1.413A1.93 1.93 0 0 1 16 16q.824 0 1.413.587Q18 17.176 18 18q0 .824-.587 1.413A1.93 1.93 0 0 1 16 20M5.15 4l2.4 5h7l2.75-5zM4.2 2h14.75q.575 0 .875.513.3.512.025 1.037l-3.55 6.4q-.275.5-.738.775A1.95 1.95 0 0 1 14.55 11H7.1L6 13h11q.424 0 .712.287.288.288.288.713 0 .424-.288.713A.97.97 0 0 1 17 15H6q-1.125 0-1.7-.988-.575-.987-.05-1.962L5.6 9.6 2 2H1a.97.97 0 0 1-.712-.288A.97.97 0 0 1 0 1Q0 .576.288.288A.97.97 0 0 1 1 0h1.625q.274 0 .525.15.25.15.375.425z"
    />
  </svg>
);
export default ShoppingCartIcon;
