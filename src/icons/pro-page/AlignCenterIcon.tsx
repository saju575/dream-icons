import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAlignCenterIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 8"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M1.167 4.333a.324.324 0 0 1-.333-.33.33.33 0 0 1 .096-.238.32.32 0 0 1 .237-.099h13.667a.324.324 0 0 1 .333.33.33.33 0 0 1-.095.239.32.32 0 0 1-.238.098zm3.84-2.75a.57.57 0 0 1-.42-.17.57.57 0 0 1-.17-.42v.013a.57.57 0 0 1 .17-.42.57.57 0 0 1 .42-.17h5.987a.57.57 0 0 1 .42.17.57.57 0 0 1 .17.42V.993a.57.57 0 0 1-.17.42.57.57 0 0 1-.42.17zm0 6a.57.57 0 0 1-.42-.17.57.57 0 0 1-.17-.42v.013a.57.57 0 0 1 .17-.42.57.57 0 0 1 .42-.17h5.987a.57.57 0 0 1 .42.17.57.57 0 0 1 .17.42v-.013a.57.57 0 0 1-.17.42.57.57 0 0 1-.42.17z"
    />
  </svg>
);
export default SvgAlignCenterIcon;
