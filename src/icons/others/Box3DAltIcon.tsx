import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBox3DAltIcon = ({
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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 19.64c.28 0 .539-.126 1.058-.381l4.172-2.044C16.077 16.31 17 15.857 17 15.14v-9m-8 13.5c-.28 0-.539-.127-1.058-.382L3.77 17.215C1.923 16.31 1 15.857 1 15.14v-9m8 13.5v-9"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.942 2.023c.52-.255.779-.382 1.058-.382.28 0 .539.127 1.058.382l4.172 2.044C16.077 4.972 17 5.425 17 6.14s-.923 1.169-2.77 2.074l-4.172 2.044c-.52.255-.779.382-1.058.382-.28 0-.539-.127-1.058-.382L3.77 8.215C1.923 7.31 1 6.857 1 6.14s.923-1.17 2.77-2.074z"
    />
  </svg>
);
export default SvgBox3DAltIcon;
