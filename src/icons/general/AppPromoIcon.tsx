import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const AppPromoIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 18 26"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M7.833 12.008V8.333q0-.495.335-.83.336-.336.832-.336t.83.335.336.831v3.675l1.05-1.02q.321-.321.802-.321t.832.35q.32.321.32.816 0 .496-.32.817l-3.034 3.033a1.12 1.12 0 0 1-.816.35 1.12 1.12 0 0 1-.817-.35L5.15 12.65a1.14 1.14 0 0 1-.336-.802q-.015-.48.336-.831a1.14 1.14 0 0 1 .802-.336q.48-.014.831.307zM3.166 25.833a2.25 2.25 0 0 1-1.648-.685A2.25 2.25 0 0 1 .833 23.5v-21q0-.962.685-1.648A2.25 2.25 0 0 1 3.166.167h11.667q.963 0 1.648.685t.685 1.648v21q0 .963-.685 1.648a2.25 2.25 0 0 1-1.648.685zm0-5.833v3.5h11.667V20zm0-2.333h11.667V6H3.166zm0-14h11.667V2.5H3.166zM7.25 22.333h3.5a.56.56 0 0 0 .408-.175.56.56 0 0 0 .175-.408.56.56 0 0 0-.175-.408.56.56 0 0 0-.408-.175h-3.5a.56.56 0 0 0-.409.175.56.56 0 0 0-.175.408.56.56 0 0 0 .175.408.56.56 0 0 0 .409.175"
    />
  </svg>
);
export default AppPromoIcon;
