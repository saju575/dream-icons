import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const PersonBookIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 17 20"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M8.5 16q-1.4 0-2.675.438-1.275.437-2.325 1.312V18h10v-.25a7.3 7.3 0 0 0-2.325-1.312A8.2 8.2 0 0 0 8.5 16m0-2q1.725 0 3.225.525T14.5 16V2h-12v14a10.3 10.3 0 0 1 2.775-1.475Q6.775 14 8.5 14m0-4q-.625 0-1.062-.437A1.45 1.45 0 0 1 7 8.5q0-.625.438-1.062A1.45 1.45 0 0 1 8.5 7q.624 0 1.063.438Q10 7.875 10 8.5q0 .624-.437 1.063A1.45 1.45 0 0 1 8.5 10m-6 10q-.825 0-1.412-.587A1.93 1.93 0 0 1 .5 18V2q0-.824.587-1.412A1.93 1.93 0 0 1 2.5 0h12q.825 0 1.412.588.588.587.588 1.412v16q0 .824-.588 1.413A1.93 1.93 0 0 1 14.5 20zm6-8q1.45 0 2.475-1.025A3.37 3.37 0 0 0 12 8.5q0-1.45-1.025-2.475A3.37 3.37 0 0 0 8.5 5Q7.05 5 6.025 6.025A3.37 3.37 0 0 0 5 8.5q0 1.45 1.025 2.475A3.37 3.37 0 0 0 8.5 12"
    />
  </svg>
);
export default PersonBookIcon;
