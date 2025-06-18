import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDifferentialPairIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 17 15"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeMiterlimit={10}
      d="M1.143 3.417h1.76l1.851 1.845h4.151l3.073-3.072h1.461M1.143 10.974h1.76l1.851-1.852h4.151l3.073 3.08h1.461"
    />
    <path
      stroke="currentColor"
      strokeMiterlimit={10}
      d="M14.596 3.737a1.547 1.547 0 1 0 0-3.094 1.547 1.547 0 0 0 0 3.094ZM14.596 13.748a1.547 1.547 0 1 0 0-3.093 1.547 1.547 0 0 0 0 3.093ZM1.143 1.565V4.88M1.143 9.122v3.314"
    />
  </svg>
);
export default SvgDifferentialPairIcon;
