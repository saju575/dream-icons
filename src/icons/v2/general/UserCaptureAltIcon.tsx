import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgUserCaptureIcon = ({
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
      strokeLinejoin="round"
      strokeWidth={1.667}
      d="M7.612 2.083c-2.222.05-3.52.262-4.406 1.146-.776.773-1.036 1.86-1.122 3.604m10.304-4.75c2.222.05 3.52.262 4.407 1.146.776.773 1.035 1.86 1.122 3.604m-5.529 11.084c2.222-.051 3.52-.263 4.407-1.146.776-.774 1.035-1.86 1.122-3.604m-10.305 4.75c-2.222-.051-3.52-.263-4.406-1.146-.776-.774-1.036-1.86-1.122-3.604"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.667}
      d="M6.25 14.167c1.943-2.036 5.536-2.131 7.5 0m-1.67-6.25c0 1.15-.935 2.083-2.087 2.083a2.085 2.085 0 0 1-2.086-2.083c0-1.151.934-2.084 2.086-2.084s2.086.933 2.086 2.084Z"
    />
  </svg>
);
export default SvgUserCaptureIcon;
