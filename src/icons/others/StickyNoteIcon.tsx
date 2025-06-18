import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const StickyNoteIcon = ({
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
      fill="currentColor"
      d="m13.44 14.72-.86-.86a.38.38 0 0 0-.28-.11.38.38 0 0 0-.28.11.38.38 0 0 0-.11.28.38.38 0 0 0 .11.28l1.14 1.14a.384.384 0 0 0 .56 0l2.26-2.26a.38.38 0 0 0 .11-.28.38.38 0 0 0-.11-.28.38.38 0 0 0-.28-.11.38.38 0 0 0-.28.11zM14 18a3.9 3.9 0 0 1-1.56-.315 4 4 0 0 1-1.27-.855 4 4 0 0 1-.855-1.27A3.9 3.9 0 0 1 10 14q0-.83.315-1.56t.855-1.27 1.27-.855A3.9 3.9 0 0 1 14 10q.83 0 1.56.315t1.27.855.855 1.27T18 14t-.315 1.56-.855 1.27-1.27.855A3.9 3.9 0 0 1 14 18m0-.8q1.34 0 2.27-.93T17.2 14t-.93-2.27T14 10.8t-2.27.93T10.8 14t.93 2.27 2.27.93M7 11V6H5a.97.97 0 0 1-.713-.287A.97.97 0 0 1 4 5q0-.424.287-.713A.97.97 0 0 1 5 4h6q.424 0 .713.287Q12 4.576 12 5q0 .424-.287.713A.97.97 0 0 1 11 6H9v5q0 .424-.287.713A.97.97 0 0 1 8 12a.97.97 0 0 1-.713-.287A.97.97 0 0 1 7 11"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M9 17a1 1 0 0 0-1-1H3c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v5a1 1 0 1 0 2 0V2c0-1.1-.9-2-2-2H2C.9 0 0 .9 0 2v14c0 1.1.9 2 2 2h6a1 1 0 0 0 1-1"
      clipRule="evenodd"
    />
  </svg>
);
export default StickyNoteIcon;
