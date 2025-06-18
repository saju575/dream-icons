import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDoublePlayIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M14 12a.83.83 0 0 0 .311.652l6.222 5.144a.917.917 0 0 0 .951.124.9.9 0 0 0 .376-.316.84.84 0 0 0 .14-.46V6.857a.84.84 0 0 0-.14-.462.9.9 0 0 0-.377-.316.92.92 0 0 0-.95.127l-6.222 5.143a.9.9 0 0 0-.23.293.8.8 0 0 0-.081.359M13 20.182V3.818a.75.75 0 0 0-.293-.578A1.12 1.12 0 0 0 12 3c-.265 0-.52.086-.707.24a.75.75 0 0 0-.293.578v16.364c0 .217.105.425.293.578.187.154.442.24.707.24s.52-.086.707-.24a.75.75 0 0 0 .293-.578M2 6.856v10.287c0 .164.043.324.123.462s.194.248.33.316a.7.7 0 0 0 .432.07.75.75 0 0 0 .398-.197l5.445-5.143a.9.9 0 0 0 .2-.293.93.93 0 0 0 0-.717.9.9 0 0 0-.2-.293L3.283 6.204a.75.75 0 0 0-.4-.196.7.7 0 0 0-.432.072.8.8 0 0 0-.328.315.9.9 0 0 0-.123.46m5.028 5.143-3.472 3.28V8.715z"
    />
  </svg>
);
export default SvgDoublePlayIcon;
