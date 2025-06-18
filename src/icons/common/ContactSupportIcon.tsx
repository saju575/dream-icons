import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const ContactSupportIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 18 21"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="m9.5 20.234-.25-3H9q-3.55 0-6.025-2.475T.5 8.734 2.975 2.71 9 .234a8.3 8.3 0 0 1 3.313.663 8.59 8.59 0 0 1 4.524 4.525 8.3 8.3 0 0 1 .663 3.312q0 1.875-.613 3.6a12.7 12.7 0 0 1-1.674 3.2 14.2 14.2 0 0 1-2.525 2.675A15.7 15.7 0 0 1 9.5 20.234m2-3.65q1.775-1.5 2.887-3.512A8.8 8.8 0 0 0 15.5 8.734q0-2.724-1.887-4.612T9 2.234 4.388 4.122Q2.5 6.01 2.5 8.734q0 2.726 1.888 4.613T9 15.234h2.5zM8.975 14.21q.425 0 .725-.3t.3-.725-.3-.725-.725-.3-.725.3-.3.725.3.725.725.3m-.725-3.175h1.5q0-.75.15-1.05t.95-1.1q.45-.45.75-.975t.3-1.125q0-1.275-.863-1.912-.862-.638-2.037-.638-1.1 0-1.85.613-.75.612-1.05 1.487l1.4.55q.125-.425.475-.837.35-.413 1.025-.413t1.012.375.338.825q0 .426-.25.763a6 6 0 0 1-.6.687q-.875.75-1.062 1.188t-.188 1.562"
    />
  </svg>
);
export default ContactSupportIcon;
