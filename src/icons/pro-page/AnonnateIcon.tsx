import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAnonnateIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 18"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M3.577 9.842c-.117-.059-1.008-.459-1.925 0-.608.308-1.192.992-1.15 1.75.058.925 1.025 1.483 1.192 1.583 1.725.95 3.3-.658 4.783.3.558.359 1.042 1.042.942 1.667-.15.925-1.542 1.3-1.792 1.358-.917.225-1.692-.041-2.008-.166M13.269.667 6.91 6.983l1.875 1.725 6.275-6.075z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="m5.752 10.058 3.033-1.35L6.91 6.983zM11.96 1.967l1.86 1.858"
    />
  </svg>
);
export default SvgAnonnateIcon;
