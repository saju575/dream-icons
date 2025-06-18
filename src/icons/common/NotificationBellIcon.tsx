import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgNotificationBellIcon = ({
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
      id="notification-bell-icon_svg__a"
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
    <g mask="url(#notification-bell-icon_svg__a)">
      <path
        fill="currentColor"
        d="M5 19a.97.97 0 0 1-.713-.288A.97.97 0 0 1 4 18q0-.424.287-.712A.97.97 0 0 1 5 17h1v-7q0-2.074 1.25-3.687T10.5 4.2v-.7q0-.625.438-1.062A1.45 1.45 0 0 1 12 2q.624 0 1.063.438.437.436.437 1.062v.7q2 .5 3.25 2.113T18 10v7h1q.424 0 .712.288.288.287.288.712 0 .424-.288.712A.97.97 0 0 1 19 19zm7 3q-.825 0-1.412-.587A1.93 1.93 0 0 1 10 20h4q0 .824-.588 1.413A1.93 1.93 0 0 1 12 22m-4-5h8v-7q0-1.65-1.175-2.825T12 6 9.175 7.175 8 10z"
      />
    </g>
  </svg>
);
export default SvgNotificationBellIcon;
