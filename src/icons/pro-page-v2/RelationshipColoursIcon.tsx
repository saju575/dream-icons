import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgRelationshipColoursIcon = ({
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
      d="M5.242 9H2.767c-.692 0-1.25-.558-1.25-1.25V2.742c0-.692.558-1.25 1.25-1.25h5.008c.692 0 1.25.558 1.25 1.25V5.25M12.758 9h2.475c.692 0 1.25.558 1.25 1.25v5.008c0 .692-.558 1.25-1.25 1.25h-5.008c-.692 0-1.25-.558-1.25-1.25V12.75"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.2}
      d="M12.75 11.5V6.492c0-.69-.56-1.25-1.25-1.25H6.492c-.69 0-1.25.56-1.25 1.25V11.5c0 .69.56 1.25 1.25 1.25H11.5c.69 0 1.25-.56 1.25-1.25Z"
    />
  </svg>
);
export default SvgRelationshipColoursIcon;
