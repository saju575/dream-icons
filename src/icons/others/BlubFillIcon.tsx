import type { SVGProps } from "react";
import React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const BlubFillIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <mask
      id="blub-fill-icon_svg__a"
      width={25}
      height={25}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path fill="#D9D9D9" stroke="currentColor" d="M1.01.567h23v23h-23z" />
    </mask>
    <g mask="url(#blub-fill-icon_svg__a)">
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={0.025}
        d="m10.521 20.911.011-.006h-.022a1.91 1.91 0 0 1-1.403-.584 1.91 1.91 0 0 1-.584-1.404v-3.55h.01l-.016-.01a7.2 7.2 0 0 1-2.358-2.57 7.03 7.03 0 0 1-.886-3.47q0-3.02 2.109-5.128 2.109-2.11 5.128-2.11t5.129 2.11q2.109 2.109 2.109 5.128 0 1.922-.886 3.494a7.3 7.3 0 0 1-2.359 2.546l-.005-.008v3.568q0 .82-.584 1.404-.584.585-1.404.584v-.013l-.01.02a2.26 2.26 0 0 1-1.99 1.143 2.26 2.26 0 0 1-1.99-1.144Zm-.023-1.994v.013h4.025v-.925h-4.025v.912Zm0-1.9v.013h4.025v-.975h-4.025v.962Zm2.762-2.937h.013v-2.707l2.196-2.197.009-.009-.009-.008-1.05-1.05-.009-.01-.009.01-1.89 1.89-1.892-1.89-.009-.01-.009.01-1.05 1.05-.008.008.008.01 2.197 2.196v2.707h1.512Z"
      />
    </g>
  </svg>
);
export default BlubFillIcon;
