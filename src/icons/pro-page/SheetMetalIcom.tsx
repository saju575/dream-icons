import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSheetMetalIcom = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 15 13"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      d="m7.406 1.46 3.89 3.08.763 2.46-3.638.695-4.225-3.851L5.094 2z"
    />
    <path stroke="currentColor" strokeLinecap="round" d="M5.093 2 8.83 5.2" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m8.421 7.695.408-2.651 2.467-.503M8.33 9.34l.762 2.36-3.892.759L1.334 8.67l.856-2.13 1.82-.423"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      d="M2.19 6.542 5.76 9.919"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m5.2 12.288.629-2.577 2.502-.363"
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      d="m11.63 8.87-.296 2.397 3.078-.6-.652-2.271z"
    />
  </svg>
);
export default SvgSheetMetalIcom;
