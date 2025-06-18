import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgThreeStarAltIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 18 19"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g filter="url(#three-star-alt-icon_svg__a)">
      <path
        fill="url(#three-star-alt-icon_svg__b)"
        d="M12.323 7.112a.2.2 0 0 1-.1-.023.16.16 0 0 1-.065-.083l-.343-.802-.862-.377a.16.16 0 0 1-.082-.065.2.2 0 0 1-.024-.1.2.2 0 0 1 .024-.1.16.16 0 0 1 .082-.066l.862-.365.343-.767a.16.16 0 0 1 .065-.083.2.2 0 0 1 .1-.023.2.2 0 0 1 .1.023q.042.024.065.083l.343.767.862.365q.06.024.082.065a.2.2 0 0 1 .024.1.2.2 0 0 1-.024.1.16.16 0 0 1-.082.066l-.862.377-.343.802a.16.16 0 0 1-.064.083.2.2 0 0 1-.1.023m0 7.03a.2.2 0 0 1-.094-.023.15.15 0 0 1-.071-.082l-.343-.767-.85-.366a.16.16 0 0 1-.082-.065.2.2 0 0 1-.024-.1.2.2 0 0 1 .024-.1.16.16 0 0 1 .082-.065l.85-.366.343-.814a.16.16 0 0 1 .065-.082.2.2 0 0 1 .1-.024q.06 0 .1.024.042.023.065.082l.343.814.85.366q.06.023.083.065a.2.2 0 0 1 .023.1.2.2 0 0 1-.023.1.16.16 0 0 1-.083.065l-.85.366-.343.767a.15.15 0 0 1-.07.082.2.2 0 0 1-.095.024m-5.184-2.04a.35.35 0 0 1-.183-.053.35.35 0 0 1-.135-.148l-.768-1.64L4.4 9.52a.35.35 0 0 1-.148-.136A.35.35 0 0 1 4.2 9.2a.35.35 0 0 1 .053-.183.35.35 0 0 1 .148-.135l1.653-.743.768-1.628a.351.351 0 0 1 .319-.212q.093 0 .182.053a.35.35 0 0 1 .136.147l.78 1.64 1.64.743q.108.046.16.135a.35.35 0 0 1 .053.183.35.35 0 0 1-.212.319l-1.641.743-.78 1.64a.3.3 0 0 1-.136.153.4.4 0 0 1-.183.047"
        shapeRendering="crispEdges"
      />
    </g>
    <defs>
      <linearGradient
        id="three-star-alt-icon_svg__b"
        x1={10.677}
        x2={9.19}
        y1={8.911}
        y2={15.824}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="currentColor" stopOpacity={0.96} />
        <stop offset={1} stopColor="currentColor" stopOpacity={0.23} />
      </linearGradient>
      <filter
        id="three-star-alt-icon_svg__a"
        width={16.801}
        height={17.744}
        x={0.379}
        y={0.921}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={-0.79} dy={1.493} />
        <feGaussianBlur stdDeviation={1.515} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.0506089 0 0 0 0 0.0159861 0 0 0 0 0.191833 0 0 0 0.25 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_18034_169842"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={0.746} dy={-0.703} />
        <feGaussianBlur stdDeviation={1.317} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.35 0" />
        <feBlend
          in2="effect1_dropShadow_18034_169842"
          result="effect2_dropShadow_18034_169842"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_18034_169842"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={1.844} />
        <feGaussianBlur stdDeviation={1.164} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
        <feBlend in2="shape" result="effect3_innerShadow_18034_169842" />
      </filter>
    </defs>
  </svg>
);
export default SvgThreeStarAltIcon;
