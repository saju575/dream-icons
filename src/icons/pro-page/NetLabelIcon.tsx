import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgNetLabelIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 17 16"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M11.331.5H.5v15h10.831zM11.332 7.996h4.987"
    />
    <path
      fill="currentColor"
      d="M8.42 4.877H7.378a.19.19 0 0 0-.193.193v3.281L4.42 4.954a.2.2 0 0 0-.154-.077h-.865a.19.19 0 0 0-.193.193v5.643c0 .109.085.194.193.194h1.042a.19.19 0 0 0 .193-.194V7.44l2.772 3.405a.2.2 0 0 0 .146.07h.865a.19.19 0 0 0 .193-.194v-5.65c0-.101-.085-.194-.193-.194"
    />
  </svg>
);
export default SvgNetLabelIcon;
