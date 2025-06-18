import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const VerifiedOutlineIcon = ({
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
      d="M12.66 12.667h.007m-.007 0c-.415.411-1.167.309-1.695.309-.648 0-.96.127-1.422.589-.393.393-.92 1.102-1.543 1.102s-1.15-.709-1.543-1.102c-.463-.462-.775-.589-1.422-.589-.528 0-1.28.103-1.696-.31-.418-.414-.315-1.17-.315-1.7 0-.672-.147-.98-.625-1.458C1.69 8.798 1.333 8.441 1.333 8S1.69 7.203 2.4 6.492c.427-.427.624-.85.624-1.457 0-.528-.103-1.28.31-1.696.414-.418 1.17-.315 1.7-.315.609 0 1.031-.198 1.458-.625.71-.71 1.067-1.066 1.508-1.066s.797.356 1.508 1.067c.427.427.85.624 1.457.624.528 0 1.28-.103 1.696.31.418.414.315 1.17.315 1.7 0 .672.147.98.625 1.458.71.71 1.066 1.067 1.066 1.508s-.356.797-1.067 1.508c-.477.478-.624.787-.624 1.457 0 .531.102 1.287-.316 1.702"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 8.595s.8.435 1.2 1.072c0 0 1.2-2.5 2.8-3.334"
    />
  </svg>
);
export default VerifiedOutlineIcon;
