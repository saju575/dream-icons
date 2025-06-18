import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFillIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 18 16"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.2}
      d="M12.567 6.742h2.341c.917 0 1.667.75 1.667 1.666v4.475c0 .917-.75 1.667-1.667 1.667H3.183c-.916 0-1.666-.75-1.666-1.667V8.408c0-.916.75-1.666 1.666-1.666h2.259"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.2}
      d="M7.1 1.242h3.792c.917 0 1.667.75 1.667 1.666v7.917H5.434V2.908c0-.916.75-1.666 1.666-1.666ZM4.45 10.825h9.1"
    />
  </svg>
);
export default SvgFillIcon;
