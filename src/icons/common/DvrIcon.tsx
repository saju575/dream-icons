import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DvrIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 18"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M5 11q.424 0 .713-.287A.97.97 0 0 0 6 10a.97.97 0 0 0-.287-.713A.97.97 0 0 0 5 9a.97.97 0 0 0-.713.287A.97.97 0 0 0 4 10q0 .424.287.713Q4.576 11 5 11m0-4q.424 0 .713-.287A.97.97 0 0 0 6 6a.97.97 0 0 0-.287-.713A.97.97 0 0 0 5 5a.97.97 0 0 0-.713.287A.97.97 0 0 0 4 6q0 .424.287.713Q4.576 7 5 7m3 4h7q.424 0 .713-.287A.97.97 0 0 0 16 10a.97.97 0 0 0-.287-.713A.97.97 0 0 0 15 9H8a.97.97 0 0 0-.713.287A.97.97 0 0 0 7 10q0 .424.287.713Q7.576 11 8 11m0-4h7q.424 0 .713-.287A.97.97 0 0 0 16 6a.97.97 0 0 0-.287-.713A.97.97 0 0 0 15 5H8a.97.97 0 0 0-.713.287A.97.97 0 0 0 7 6q0 .424.287.713Q7.576 7 8 7m-6 9q-.824 0-1.412-.588A1.93 1.93 0 0 1 0 14V2Q0 1.176.588.588A1.93 1.93 0 0 1 2 0h16q.824 0 1.413.588Q20 1.175 20 2v12q0 .825-.587 1.412A1.93 1.93 0 0 1 18 16h-4v1q0 .424-.287.712A.97.97 0 0 1 13 18H7a.97.97 0 0 1-.713-.288A.97.97 0 0 1 6 17v-1zm0-2h16V2H2z"
    />
  </svg>
);
export default DvrIcon;
