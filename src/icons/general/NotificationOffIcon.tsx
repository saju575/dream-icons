import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const NotificationOffIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 21"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M15.15 17H4a.97.97 0 0 1-.712-.288A.97.97 0 0 1 3 16q0-.424.288-.713A.97.97 0 0 1 4 15h1V8q0-.825.213-1.625A6 6 0 0 1 5.85 4.85l1.5 1.5A4.025 4.025 0 0 0 7 8v7h6.2L1.1 2.9a.95.95 0 0 1-.275-.7q0-.425.275-.7a.95.95 0 0 1 .7-.275q.426 0 .7.275l17 17q.275.275.288.688a.93.93 0 0 1-.288.712.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275zM12.5 2.2q2 .5 3.25 2.113T17 8v2.75q0 .5-.312.75-.313.25-.688.25t-.687-.262-.313-.763V8q0-1.65-1.175-2.825T11 4q-.4 0-.85.1t-.8.25a1.33 1.33 0 0 1-.837.075 1 1 0 0 1-.638-.475.96.96 0 0 1-.137-.687.72.72 0 0 1 .387-.538 5 5 0 0 1 .675-.3q.35-.124.7-.225v-.7q0-.625.438-1.062A1.45 1.45 0 0 1 11 0q.625 0 1.063.438.437.436.437 1.062zM11 20q-.75 0-1.337-.413-.588-.411-.588-1.112 0-.2.163-.338A.55.55 0 0 1 9.6 18h2.8q.2 0 .363.137a.43.43 0 0 1 .162.338q0 .7-.587 1.112A2.27 2.27 0 0 1 11 20"
    />
  </svg>
);
export default NotificationOffIcon;
