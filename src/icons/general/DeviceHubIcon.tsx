import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DeviceHubIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 19 18"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M.5 17v-3q0-.424.288-.713A.97.97 0 0 1 1.5 13h3l4-4V5.8a3 3 0 0 1-1.45-1.087A2.86 2.86 0 0 1 6.5 3q0-1.25.875-2.125A2.9 2.9 0 0 1 9.5 0q1.25 0 2.125.875T12.5 3q0 .95-.55 1.713-.55.762-1.45 1.087V9l4 4h3q.424 0 .712.287.288.288.288.713v3q0 .424-.288.712A.97.97 0 0 1 17.5 18h-3a.97.97 0 0 1-.713-.288A.97.97 0 0 1 13.5 17v-2.05l-4-4-4 4V17q0 .424-.287.712A.97.97 0 0 1 4.5 18h-3a.97.97 0 0 1-.712-.288A.97.97 0 0 1 .5 17"
    />
  </svg>
);
export default DeviceHubIcon;
