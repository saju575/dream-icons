import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const PushPinOutlineIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 13 19"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M10.516 2.583V9l1.7 1.558q.15.138.225.31a.9.9 0 0 1 .075.355v.527a.85.85 0 0 1-.288.653q-.287.264-.712.264h-4v5.11a.88.88 0 0 1-.3.665l-.35.32a.5.5 0 0 1-.35.138.5.5 0 0 1-.35-.137l-.35-.321a.88.88 0 0 1-.3-.665v-5.11h-4q-.425 0-.713-.264a.85.85 0 0 1-.287-.653v-.527a.88.88 0 0 1 .3-.665L2.516 9V2.583q-.425 0-.713-.263a.85.85 0 0 1-.287-.653.85.85 0 0 1 .287-.653Q2.091.75 2.516.75h8q.424 0 .712.264a.85.85 0 0 1 .288.653.85.85 0 0 1-.288.653q-.287.263-.712.263m-7.15 8.25h6.3L8.516 9.78V2.583h-4V9.78z"
    />
  </svg>
);
export default PushPinOutlineIcon;
