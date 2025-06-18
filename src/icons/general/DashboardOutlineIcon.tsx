import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DashboardOutlineIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 19 19"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M10.426 5.863v-4q0-.424.287-.712a.97.97 0 0 1 .713-.288h6q.424 0 .712.288.288.287.288.712v4q0 .425-.288.713a.97.97 0 0 1-.712.287h-6a.97.97 0 0 1-.713-.287.97.97 0 0 1-.287-.713m-10 4v-8q0-.424.287-.712a.97.97 0 0 1 .713-.288h6q.424 0 .712.288.288.287.288.712v8q0 .425-.288.713a.97.97 0 0 1-.712.287h-6a.97.97 0 0 1-.713-.287.97.97 0 0 1-.287-.713m10 8v-8q0-.424.287-.712a.97.97 0 0 1 .713-.288h6q.424 0 .712.288.288.287.288.712v8q0 .425-.288.713a.97.97 0 0 1-.712.287h-6a.97.97 0 0 1-.713-.287.97.97 0 0 1-.287-.713m-10 0v-4q0-.424.287-.712a.97.97 0 0 1 .713-.288h6q.424 0 .712.288.288.287.288.712v4q0 .425-.288.713a.97.97 0 0 1-.712.287h-6a.97.97 0 0 1-.713-.287.97.97 0 0 1-.287-.713m2-9h4v-6h-4zm10 8h4v-6h-4zm0-12h4v-2h-4zm-10 12h4v-2h-4z"
    />
  </svg>
);
export default DashboardOutlineIcon;
