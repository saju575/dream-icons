import type { SVGProps } from "react";
import React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DownloadIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M8 11.575q-.2 0-.375-.062A.9.9 0 0 1 7.3 11.3L3.7 7.7a.92.92 0 0 1-.288-.7q.014-.4.288-.7.3-.3.712-.312a.93.93 0 0 1 .713.287L7 8.15V1q0-.424.287-.712A.97.97 0 0 1 8 0q.424 0 .713.288Q9 .575 9 1v7.15l1.875-1.875a.93.93 0 0 1 .713-.288Q12 6 12.3 6.3q.275.3.287.7a.92.92 0 0 1-.287.7l-3.6 3.6q-.15.15-.325.212a1.1 1.1 0 0 1-.375.063M2 16q-.824 0-1.412-.588A1.93 1.93 0 0 1 0 14v-2q0-.424.288-.713A.97.97 0 0 1 1 11q.424 0 .712.287Q2 11.576 2 12v2h12v-2q0-.424.287-.713A.97.97 0 0 1 15 11q.424 0 .713.287.287.288.287.713v2q0 .825-.588 1.412A1.93 1.93 0 0 1 14 16z"
    />
  </svg>
);
export default DownloadIcon;
