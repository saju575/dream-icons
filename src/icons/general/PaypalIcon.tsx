import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const PaypalIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 19 22"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.294 3.835 1.165 16.671c-.18 1.081-.269 1.622.03 1.975.297.354.842.354 1.933.354h.402c.823 0 1.234 0 1.515-.244.28-.245.34-.654.455-1.473l.468-3.29c.037-.26.055-.39.084-.501a1.99 1.99 0 0 1 1.697-1.479C7.862 12 7.993 12 8.254 12h1.162a6.636 6.636 0 0 0 6.464-5.186C16.554 3.836 14.302 1 11.263 1h-4.64c-1.114 0-1.67 0-2.11.235-.25.134-.47.32-.642.547-.303.397-.394.949-.577 2.053"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5.243 18.5-.228 1.332c-.105.61.37 1.168.996 1.168h1.99c.495 0 .917-.354.998-.836l.73-4.329c.08-.482.503-.835.997-.835h1.803c2.581 0 4.816-1.773 5.376-4.265C18.297 8.99 17.445 7.31 16 6.5"
    />
  </svg>
);
export default PaypalIcon;
