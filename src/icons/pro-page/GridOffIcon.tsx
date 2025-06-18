import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const GridOffIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 14 13"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M4.956 10.402V8.044H2.598v2.153q0 .09.058.147a.2.2 0 0 0 .148.058zm3.218 0V8.41l-.365-.366H5.823v2.358zM4.956 7.178v-1.97l-.382-.382H2.598v2.352zm6.443 0V4.826H9.04v1.537l.814.815zM8.174 3.96V1.602H5.823v1.543l.814.815zm3.225 0V1.807a.2.2 0 0 0-.058-.147.2.2 0 0 0-.148-.058H9.041V3.96zm.866 5.628L3.413.735h7.78q.45 0 .761.311.31.31.311.761zm-9.461 1.68q-.45 0-.761-.31a1.03 1.03 0 0 1-.311-.761V.735L12.265 11.27zm9.466 1.22L.63.857A.4.4 0 0 1 .5.554a.46.46 0 0 1 .147-.3Q.792.107.948.107q.157 0 .302.145l11.633 11.633q.137.138.144.304a.42.42 0 0 1-.132.312.42.42 0 0 1-.31.134.45.45 0 0 1-.316-.147"
    />
  </svg>
);
export default GridOffIcon;
