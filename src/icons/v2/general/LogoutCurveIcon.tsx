import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLogoutAltIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 20"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.25}
      d="M11.667 2.58q-.571-.08-1.167-.08c-4.418 0-8 3.358-8 7.5s3.582 7.5 8 7.5q.595 0 1.167-.08"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.25}
      d="M17.5 10H9.167m8.333 0c0-.583-1.662-1.674-2.084-2.083M17.5 10c0 .584-1.662 1.674-2.084 2.083"
    />
  </svg>
);
export default SvgLogoutAltIcon;
