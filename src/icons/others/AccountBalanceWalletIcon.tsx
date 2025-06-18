import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const AccountBalanceWalletIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 18"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M2.193 18q-.824 0-1.412-.587A1.93 1.93 0 0 1 .193 16V2q0-.824.588-1.412A1.93 1.93 0 0 1 2.193 0h14q.825 0 1.413.588.587.587.587 1.412v2.5h-2V2h-14v14h14v-2.5h2V16q0 .824-.587 1.413a1.93 1.93 0 0 1-1.413.587zm8-4q-.825 0-1.412-.588A1.93 1.93 0 0 1 8.193 12V6q0-.824.588-1.412A1.93 1.93 0 0 1 10.193 4h7q.825 0 1.413.588.587.587.587 1.412v6q0 .825-.587 1.412a1.93 1.93 0 0 1-1.413.588zm7-2V6h-7v6zm-4-1.5q.625 0 1.063-.437.437-.438.437-1.063t-.437-1.062a1.45 1.45 0 0 0-1.063-.438q-.624 0-1.062.438A1.45 1.45 0 0 0 11.693 9q0 .624.438 1.063.437.437 1.062.437"
    />
  </svg>
);
export default AccountBalanceWalletIcon;
