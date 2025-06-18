import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const UndoIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 13 11"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M2.587 11a.4.4 0 0 1-.297-.12.4.4 0 0 1-.12-.297q0-.177.12-.297t.297-.12h5.629q1.296 0 2.209-.889a2.92 2.92 0 0 0 .912-2.171q0-1.282-.912-2.164-.913-.88-2.21-.881H1.765L3.94 6.237a.4.4 0 0 1 .133.295.4.4 0 0 1-.133.295.4.4 0 0 1-.303.125.42.42 0 0 1-.287-.125L.64 4.115a.7.7 0 0 1-.153-.222.7.7 0 0 1-.045-.249.7.7 0 0 1 .045-.248q.043-.114.153-.223L3.35.462a.4.4 0 0 1 .295-.133.4.4 0 0 1 .295.133.4.4 0 0 1 .125.302.42.42 0 0 1-.125.287L1.764 3.228h6.452q1.635 0 2.795 1.128t1.16 2.75q0 1.621-1.16 2.758Q9.851 11 8.216 11z"
    />
  </svg>
);
export default UndoIcon;
