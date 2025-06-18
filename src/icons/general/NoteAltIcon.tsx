import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const NoteAltIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 18 20"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M2 20q-.824 0-1.412-.587A1.93 1.93 0 0 1 0 18V4q0-.824.588-1.412A1.93 1.93 0 0 1 2 2h4.2q.326-.9 1.087-1.45A2.86 2.86 0 0 1 9 0q.95 0 1.713.55.762.55 1.087 1.45H16q.824 0 1.413.587Q18 3.176 18 4v14q0 .824-.587 1.413A1.93 1.93 0 0 1 16 20zm0-2h14V4H2zM9 3.25a.73.73 0 0 0 .75-.75.73.73 0 0 0-.75-.75.73.73 0 0 0-.75.75.73.73 0 0 0 .75.75M4.5 16h1.2q.2 0 .388-.088.188-.087.312-.212l5.7-5.65L9.95 7.9 4.3 13.55q-.15.15-.225.337T4 14.276V15.5q0 .2.15.35t.35.15m8.3-6.65 1.05-1.1a.48.48 0 0 0 0-.7l-1.4-1.4a.48.48 0 0 0-.7 0l-1.1 1.05z"
    />
  </svg>
);
export default NoteAltIcon;
