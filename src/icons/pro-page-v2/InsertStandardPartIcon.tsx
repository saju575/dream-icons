import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgInsertStandardPartIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 18 18"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M7.141 10.975c.383.175.65.483.692.867.041.375-.15.733-.492.991-.417.317-.55.884-.275 1.334 0 0 0 .016.008.016.275.442.85.575 1.317.342.375-.192.783-.208 1.1 0s.483.583.467 1.008c-.017.509.325.975.833 1.042h.1c.508.05.942-.317 1.05-.817.083-.416.325-.75.683-.875s.75-.016 1.075.259c.4.333.992.341 1.359-.025l.016-.017c.367-.367.367-.95.042-1.358-.267-.325-.375-.717-.25-1.075.125-.359.458-.6.875-.684.5-.1.875-.541.825-1.05 0-.033 0-.058-.008-.091a.97.97 0 0 0-.984-.842c-.441.025-.841-.142-1.05-.475-.208-.333-.175-.758.034-1.15.241-.442.075-1-.35-1.275 0 0-.017 0-.017-.008-.442-.284-1.017-.15-1.333.266-.259.334-.617.525-.992.484s-.683-.317-.858-.7M3.567 11.583A2.066 2.066 0 0 1 1.5 9.517V4c0-1.383 1.117-2.5 2.5-2.5h5.533c1.134 0 2.05.917 2.05 2.05M2.225 2.225l9.291 9.292"
    />
  </svg>
);
export default SvgInsertStandardPartIcon;
