import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const PersonRemoveIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 21 16"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M16 5h4q.424 0 .712.287Q21 5.576 21 6q0 .424-.288.713A.97.97 0 0 1 20 7h-4a.97.97 0 0 1-.713-.287A.97.97 0 0 1 15 6q0-.424.287-.713A.97.97 0 0 1 16 5M8 8Q6.35 8 5.175 6.825T4 4t1.175-2.825T8 0t2.825 1.175T12 4t-1.175 2.825T8 8m-8 6v-.8q0-.85.438-1.562.437-.713 1.162-1.088a15 15 0 0 1 3.15-1.163A13.8 13.8 0 0 1 8 9q1.65 0 3.25.387 1.6.388 3.15 1.163.724.375 1.162 1.087Q16 12.35 16 13.2v.8q0 .825-.588 1.412A1.93 1.93 0 0 1 14 16H2q-.824 0-1.412-.588A1.93 1.93 0 0 1 0 14m2 0h12v-.8a.973.973 0 0 0-.5-.85q-1.35-.675-2.725-1.012a11.6 11.6 0 0 0-5.55 0Q3.85 11.675 2.5 12.35a.97.97 0 0 0-.5.85zm6-8q.825 0 1.412-.588Q10 4.826 10 4q0-.824-.588-1.412A1.93 1.93 0 0 0 8 2q-.824 0-1.412.587A1.93 1.93 0 0 0 6 4q0 .824.588 1.412Q7.175 6 8 6"
    />
  </svg>
);
export default PersonRemoveIcon;
