import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const AccountTreeIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 19"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M13 16.887v-1h-2q-.825 0-1.412-.588A1.93 1.93 0 0 1 9 13.887v-8H7v1q0 .824-.588 1.412A1.93 1.93 0 0 1 5 8.887H2q-.824 0-1.412-.588A1.93 1.93 0 0 1 0 6.887v-4q0-.825.588-1.413A1.93 1.93 0 0 1 2 .887h3q.824 0 1.412.587Q7 2.062 7 2.887v1h6v-1q0-.825.588-1.413A1.93 1.93 0 0 1 15 .887h3q.824 0 1.413.587.587.588.587 1.413v4q0 .824-.587 1.412A1.93 1.93 0 0 1 18 8.887h-3q-.825 0-1.412-.588A1.93 1.93 0 0 1 13 6.887v-1h-2v8h2v-1q0-.825.588-1.413A1.93 1.93 0 0 1 15 10.887h3q.824 0 1.413.587.587.588.587 1.413v4q0 .825-.587 1.412a1.93 1.93 0 0 1-1.413.588h-3q-.825 0-1.412-.588A1.93 1.93 0 0 1 13 16.887m2-10h3v-4h-3zm0 10h3v-4h-3zm-13-10h3v-4H2z"
    />
  </svg>
);
export default AccountTreeIcon;
