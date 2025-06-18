import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCreateDatumIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 14 12"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.975 2.64v5M6.84.767l-.502 1.745c-.026.09.038.172.133.172h1.007c.089 0 .159-.09.133-.172L7.108.767a.135.135 0 0 0-.26 0zM2.727 10.04 7.05 7.53M1.172 11.098l1.758-.44a.134.134 0 0 0 .083-.204l-.503-.872a.14.14 0 0 0-.217-.026L1.04 10.868c-.096.102 0 .261.133.23M11.28 10.06 6.96 7.543M12.967 10.894 11.712 9.58a.14.14 0 0 0-.216.026l-.51.866c-.044.077 0 .178.083.204l1.758.446c.134.032.23-.128.134-.23zM7.014 9.289a1.758 1.758 0 1 0 0-3.516 1.758 1.758 0 0 0 0 3.516"
    />
  </svg>
);
export default SvgCreateDatumIcon;
