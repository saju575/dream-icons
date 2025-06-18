import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFrameIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 14 14"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.2.834c-.694.13-1.203.357-1.607.76-.402.403-.63.913-.76 1.606M10.8.834c.694.13 1.203.357 1.606.76s.631.913.76 1.606M8.266.67Q7.683.666 7 .667q-.683 0-1.266.003m7.596 5.063q.004.584.004 1.267.001.684-.004 1.267M.67 5.733Q.666 6.317.666 7q0 .684.003 1.267M.833 10.8c.13.693.358 1.203.76 1.606.404.403.914.63 1.606.76m9.966-2.366c-.129.693-.357 1.203-.76 1.606s-.913.63-1.606.76m-2.533.164q-.583.005-1.267.003-.683 0-1.266-.003"
    />
  </svg>
);
export default SvgFrameIcon;
