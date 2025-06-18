import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const TrashIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 18"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M3 18q-.824 0-1.412-.587A1.93 1.93 0 0 1 1 16V3a.97.97 0 0 1-.712-.288A.97.97 0 0 1 0 2q0-.424.288-.712A.97.97 0 0 1 1 1h4q0-.424.287-.712A.97.97 0 0 1 6 0h4q.424 0 .713.288Q11 .575 11 1h4q.424 0 .713.288Q16 1.575 16 2q0 .424-.287.712A.97.97 0 0 1 15 3v13q0 .824-.588 1.413A1.93 1.93 0 0 1 13 18zM13 3H3v13h10zM6 14q.424 0 .713-.287A.97.97 0 0 0 7 13V6a.97.97 0 0 0-.287-.713A.97.97 0 0 0 6 5a.97.97 0 0 0-.713.287A.97.97 0 0 0 5 6v7q0 .424.287.713Q5.576 14 6 14m4 0q.424 0 .713-.287A.97.97 0 0 0 11 13V6a.97.97 0 0 0-.287-.713A.97.97 0 0 0 10 5a.97.97 0 0 0-.713.287A.97.97 0 0 0 9 6v7q0 .424.287.713Q9.576 14 10 14"
    />
  </svg>
);
export default TrashIcon;
