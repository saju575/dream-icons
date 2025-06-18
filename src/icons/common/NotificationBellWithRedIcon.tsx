import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgNotificationBellWithRedIcon = ({
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
      id="notification-bell-with-red-icon_svg__a"
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
    <g mask="url(#notification-bell-with-red-icon_svg__a)">
      <path
        fill="currentColor"
        d="M12 22q-.825 0-1.412-.587A1.93 1.93 0 0 1 10 20h4q0 .824-.588 1.413A1.93 1.93 0 0 1 12 22m-7-3a.97.97 0 0 1-.713-.288A.97.97 0 0 1 4 18q0-.424.287-.712A.97.97 0 0 1 5 17h1v-7q0-2.074 1.25-3.687T10.5 4.2v-.7q0-.625.438-1.062A1.45 1.45 0 0 1 12 2q.624 0 1.063.438.437.436.437 1.062v.325a4.606 4.606 0 0 0-.5 2.3q-.25-.05-.488-.088A3 3 0 0 0 12 6q-1.65 0-2.825 1.175T8 10v7h8v-6.425A5 5 0 0 0 18 11v6h1q.424 0 .712.288.288.287.288.712 0 .424-.288.712A.97.97 0 0 1 19 19z"
      />
      <path
        fill="#F2415A"
        d="M15.875 8.125A2.9 2.9 0 0 0 18 9q1.25 0 2.125-.875A2.9 2.9 0 0 0 21 6q0-1.25-.875-2.125A2.9 2.9 0 0 0 18 3q-1.25 0-2.125.875A2.9 2.9 0 0 0 15 6q0 1.25.875 2.125"
      />
    </g>
  </svg>
);
export default SvgNotificationBellWithRedIcon;
