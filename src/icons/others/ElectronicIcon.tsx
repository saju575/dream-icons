import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const ElectronicIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <mask
      id="electronic-icon_svg__a"
      width={24}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path fill="#D9D9D9" d="M0 0h24v24H0z" />
    </mask>
    <g mask="url(#electronic-icon_svg__a)">
      <path
        fill="currentColor"
        d="m11 14.5-5.925-.75q-.625-.075-.813-.675t.263-1.025l10.225-9.8a.8.8 0 0 1 .3-.187Q15.225 2 15.525 2q.5 0 .762.425.263.425.013.875L13 9.5l5.925.75q.624.075.812.675t-.262 1.025L9.25 21.75a.8.8 0 0 1-.3.188 1.5 1.5 0 0 1-.475.062.84.84 0 0 1-.763-.425Q7.45 21.15 7.7 20.7zm1.55 1.325 4.025-3.85-6.725-.85L11.425 8.2l-4 3.85 6.7.825z"
      />
    </g>
  </svg>
);
export default ElectronicIcon;
