import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const ThreeStarIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 29 28"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="url(#three-star-icon_svg__a)"
      d="M11 7.583a.365.365 0 0 0-.364-.364A2.187 2.187 0 0 1 8.448 5.03a.365.365 0 1 0-.729 0c0 1.208-.98 2.188-2.187 2.188a.365.365 0 1 0 0 .729c1.208 0 2.187.98 2.187 2.187a.365.365 0 0 0 .73 0c0-1.208.979-2.187 2.187-2.187A.365.365 0 0 0 11 7.583"
      style={{
        mixBlendMode: "screen",
      }}
    />
    <path
      fill="currentColor"
      d="M11 7.583a.365.365 0 0 0-.364-.364A2.187 2.187 0 0 1 8.448 5.03a.365.365 0 1 0-.729 0c0 1.208-.98 2.188-2.187 2.188a.365.365 0 1 0 0 .729c1.208 0 2.187.98 2.187 2.187a.365.365 0 0 0 .73 0c0-1.208.979-2.187 2.187-2.187A.365.365 0 0 0 11 7.583"
    />
    <path
      fill="url(#three-star-icon_svg__b)"
      d="M19.75 7a.583.583 0 0 0-1.167 0 5.25 5.25 0 0 1-5.25 5.25.583.583 0 0 0 0 1.167c2.9 0 5.25 2.35 5.25 5.25a.584.584 0 0 0 1.167 0c0-2.9 2.35-5.25 5.25-5.25a.583.583 0 0 0 0-1.167A5.25 5.25 0 0 1 19.75 7"
      style={{
        mixBlendMode: "screen",
      }}
    />
    <path
      fill="currentColor"
      d="M19.75 7a.583.583 0 0 0-1.167 0 5.25 5.25 0 0 1-5.25 5.25.583.583 0 0 0 0 1.167c2.9 0 5.25 2.35 5.25 5.25a.584.584 0 0 0 1.167 0c0-2.9 2.35-5.25 5.25-5.25a.583.583 0 0 0 0-1.167A5.25 5.25 0 0 1 19.75 7"
    />
    <path
      fill="url(#three-star-icon_svg__c)"
      d="M9.25 14.583a.583.583 0 0 0-1.167 0 3.5 3.5 0 0 1-3.5 3.5.583.583 0 0 0 0 1.167 3.5 3.5 0 0 1 3.5 3.5.583.583 0 0 0 1.167 0 3.5 3.5 0 0 1 3.5-3.5.583.583 0 0 0 0-1.167 3.5 3.5 0 0 1-3.5-3.5"
      style={{
        mixBlendMode: "screen",
      }}
    />
    <path
      fill="currentColor"
      d="M9.25 14.583a.583.583 0 0 0-1.167 0 3.5 3.5 0 0 1-3.5 3.5.583.583 0 0 0 0 1.167 3.5 3.5 0 0 1 3.5 3.5.583.583 0 0 0 1.167 0 3.5 3.5 0 0 1 3.5-3.5.583.583 0 0 0 0-1.167 3.5 3.5 0 0 1-3.5-3.5"
    />
    <defs>
      <linearGradient
        id="three-star-icon_svg__a"
        x1={4}
        x2={25.584}
        y1={23.333}
        y2={23.336}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E59CFF" />
        <stop offset={0.5} stopColor="#BA9CFF" />
        <stop offset={1} stopColor="#9CB2FF" />
      </linearGradient>
      <linearGradient
        id="three-star-icon_svg__b"
        x1={4}
        x2={25.583}
        y1={23.333}
        y2={23.336}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E59CFF" />
        <stop offset={0.5} stopColor="#BA9CFF" />
        <stop offset={1} stopColor="#9CB2FF" />
      </linearGradient>
      <linearGradient
        id="three-star-icon_svg__c"
        x1={4}
        x2={25.583}
        y1={23.333}
        y2={23.336}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E59CFF" />
        <stop offset={0.5} stopColor="#BA9CFF" />
        <stop offset={1} stopColor="#9CB2FF" />
      </linearGradient>
    </defs>
  </svg>
);
export default ThreeStarIcon;
