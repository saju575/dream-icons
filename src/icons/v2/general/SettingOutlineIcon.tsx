import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSettingOutlineIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 20"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.667}
      d="M11.159 3.99c-1.171-.21-1.208-1.678-2.38-1.47-1.17.21-.7 1.597-1.737 2.193s-2.006-.507-2.767.403c-.76.91.492 1.678.082 2.797C3.947 9.03 2.5 8.815 2.5 10s1.454.97 1.857 2.088-.85 1.887-.082 2.797 1.738-.187 2.767.403c1.03.589.56 1.99 1.738 2.192s1.208-1.26 2.379-1.469c1.17-.209 1.708 1.163 2.737.567s.112-1.745.88-2.655 2.058-.209 2.461-1.328-1.037-1.41-1.037-2.603 1.44-1.484 1.037-2.602c-.403-1.12-1.7-.418-2.461-1.328s.142-2.185-.94-2.685-1.506.806-2.677.597z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.667}
      d="M10.1 12.432a2.431 2.431 0 1 0 0-4.863 2.431 2.431 0 0 0 0 4.863"
    />
  </svg>
);
export default SvgSettingOutlineIcon;
