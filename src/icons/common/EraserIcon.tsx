import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const EraserIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 22"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m6.738 6.78-3.891 3.977c-1.17 1.196-1.755 1.794-1.834 2.523q-.025.233 0 .464c.08.73.664 1.327 1.834 2.523l.149.152c.624.639.937.958 1.31 1.172q.328.188.689.291c.413.118.856.118 1.743.118.886 0 1.33 0 1.743-.118q.36-.105.688-.29c.374-.215.686-.534 1.31-1.173l2.845-2.907M6.738 6.78l3.582-3.657C11.706 1.708 12.4 1 13.263 1s1.556.708 2.941 2.125l.743.76C18.316 5.283 19 5.983 19 6.85s-.685 1.566-2.054 2.964l-3.622 3.698M6.738 6.78l6.586 6.732M8 21h11"
    />
  </svg>
);
export default EraserIcon;
