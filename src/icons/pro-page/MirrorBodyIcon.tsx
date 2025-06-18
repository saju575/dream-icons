import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMirrorBodyIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5.058 4.27v9.268H.5zM10.946 4.27v9.268H15.5zM8.423 1.75a.42.42 0 0 0-.42-.417.42.42 0 0 0-.421.418v12.498c0 .23.188.418.42.418.233 0 .421-.187.421-.418z"
    />
  </svg>
);
export default SvgMirrorBodyIcon;
