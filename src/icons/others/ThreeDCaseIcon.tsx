import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const ThreeDCaseIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <mask
      id="Three-d-case-icon_svg__a"
      width={24}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path fill="#D9D9D9" d="M0 0h24v24H0z" />
    </mask>
    <g mask="url(#Three-d-case-icon_svg__a)">
      <path
        fill="currentColor"
        d="M2 20a.97.97 0 0 1-.712-.288A.97.97 0 0 1 1 19q0-.424.288-.712A.97.97 0 0 1 2 18h4v-2H3a.97.97 0 0 1-.712-.287A.97.97 0 0 1 2 15q0-.424.288-.713A.97.97 0 0 1 3 14h3v-2H4.05a.97.97 0 0 1-.712-.287A.97.97 0 0 1 3.05 11q0-.424.288-.713A.97.97 0 0 1 4.05 10H6V7.05l-1.525-3.3a.97.97 0 0 1-.037-.762.95.95 0 0 1 .512-.563.97.97 0 0 1 .763-.037.95.95 0 0 1 .562.512L8.2 7h11.6l-1.525-3.25a.97.97 0 0 1-.037-.762.95.95 0 0 1 .512-.563.97.97 0 0 1 .762-.037.95.95 0 0 1 .563.512L21.8 6.6a1.9 1.9 0 0 1 .2.85V18q0 .824-.587 1.413A1.93 1.93 0 0 1 20 20zm10-7h4q.424 0 .712-.287A.97.97 0 0 0 17 12a.97.97 0 0 0-.288-.713A.97.97 0 0 0 16 11h-4a.97.97 0 0 0-.713.287A.97.97 0 0 0 11 12q0 .424.287.713.288.287.713.287m-4 5h12V9H8z"
      />
    </g>
  </svg>
);
export default ThreeDCaseIcon;
