import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCircleBy3XPIcon = ({
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
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M2.974 10.35a6.2 6.2 0 0 1-.175-1.483A6.22 6.22 0 0 1 7.274 2.9M13.3 13.341A6.18 6.18 0 0 1 9 15.075a6.18 6.18 0 0 1-4.3-1.734M10.725 2.9A6.21 6.21 0 0 1 15.2 8.867a6.2 6.2 0 0 1-.175 1.483"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.2}
      d="M9.9.925H8.11a.833.833 0 0 0-.834.833V3.55c0 .46.373.833.834.833H9.9c.46 0 .834-.373.834-.833V1.758A.833.833 0 0 0 9.9.925ZM1.68 12.052l.896 1.552c.23.399.74.535 1.138.305l1.552-.896a.833.833 0 0 0 .305-1.138l-.896-1.552a.833.833 0 0 0-1.139-.305l-1.551.896a.833.833 0 0 0-.305 1.138ZM15.418 13.607l.896-1.552a.833.833 0 0 0-.305-1.138l-1.552-.896a.833.833 0 0 0-1.138.305l-.896 1.552a.833.833 0 0 0 .305 1.138l1.552.896a.833.833 0 0 0 1.138-.305Z"
    />
  </svg>
);
export default SvgCircleBy3XPIcon;
