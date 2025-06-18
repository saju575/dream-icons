import type { SVGProps } from "react";
import React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const HeartFillIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 22 20"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.463 1.994c-2.682-1.645-5.023-.982-6.429.074-.576.433-.864.65-1.034.65s-.458-.217-1.034-.65C8.56 1.012 6.219.349 3.537 1.994.018 4.153-.778 11.274 7.34 17.284 8.886 18.427 9.659 19 11 19s2.114-.572 3.66-1.717c8.118-6.008 7.322-13.13 3.803-15.289"
    />
  </svg>
);
export default HeartFillIcon;
