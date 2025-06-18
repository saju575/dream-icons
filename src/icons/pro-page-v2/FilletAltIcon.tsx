import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFilletAltIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 18 18"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.2}
      d="M10.866 10.042V7.975a.833.833 0 0 0-.833-.833H7.975a.833.833 0 0 0-.834.833v2.067c0 .46.373.833.834.833h2.058c.46 0 .833-.373.833-.833ZM9.008 2.733h3.458c1.542 0 2.8 1.259 2.8 2.8V9M9.008 15.267H5.55a2.806 2.806 0 0 1-2.8-2.8V9M14.717 11.483H15.8c.383 0 .7-.316.7-.7V9.7c0-.383-.317-.7-.7-.7h-1.0830000000000002c-.384 0-.7.317-.7.7v1.083c0 .384.316.7.7.7ZM7.224 3.975h1.084c.383 0 .7-.317.7-.7V2.192c0-.384-.317-.7-.7-.7H7.224c-.383 0-.7.316-.7.7v1.083c0 .383.317.7.7.7ZM2.191 9h1.084c.383 0 .7-.317.7-.7V7.217c0-.384-.317-.7-.7-.7H2.19c-.383 0-.7.316-.7.7V8.3c0 .383.317.7.7.7Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.2}
      d="M9.7 16.509h1.083c.384 0 .7-.317.7-.7v-1.084c0-.383-.316-.7-.7-.7H9.7c-.383 0-.7.317-.7.7v1.084c0 .383.317.7.7.7Z"
    />
  </svg>
);
export default SvgFilletAltIcon;
