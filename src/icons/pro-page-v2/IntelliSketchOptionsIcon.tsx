import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgIntelliSketchOptionsIcon = ({
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
      d="M12.758 11.5V6.492c0-.69-.56-1.25-1.25-1.25H6.499c-.69 0-1.25.56-1.25 1.25V11.5c0 .69.56 1.25 1.25 1.25h5.009c.69 0 1.25-.56 1.25-1.25ZM10.2 5.242V1.475h5.808M7.8 5.242V1.475H1.99M7.8 12.759v3.766H1.99M10.2 12.759v3.766h5.808M16.508 7.792h-3.741M16.508 10.209h-3.741M1.491 7.792h3.742M1.491 10.209h3.742"
    />
  </svg>
);
export default SvgIntelliSketchOptionsIcon;
