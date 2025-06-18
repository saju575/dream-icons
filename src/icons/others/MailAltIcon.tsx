import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMailAltIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 17"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m5.832 5.724 2.452 1.45c1.429.845 2 .845 3.43 0l2.451-1.45"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1.678 9.87c.054 2.555.082 3.832 1.024 4.778.943.947 2.254.98 4.879 1.045 1.616.042 3.218.042 4.835 0 2.624-.066 3.935-.098 4.878-1.045.942-.946.97-2.223 1.025-4.777.017-.822.017-1.639 0-2.46-.055-2.555-.083-3.832-1.025-4.778-.943-.947-2.254-.979-4.878-1.045a96 96 0 0 0-4.835 0c-2.625.066-3.936.098-4.879 1.045-.942.946-.97 2.223-1.025 4.778a58 58 0 0 0 .001 2.46"
    />
  </svg>
);
export default SvgMailAltIcon;
