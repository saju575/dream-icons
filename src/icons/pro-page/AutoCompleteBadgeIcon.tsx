import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAutoCompleteBadgeIcon = ({
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
      fill="currentColor"
      d="M9 17.438c-.724 0-1.437-.163-2.012-.476l-4-2.224c-1.2-.663-2.125-2.25-2.125-3.625V6.875c0-1.363.938-2.95 2.125-3.625l4-2.225c1.15-.637 2.875-.637 4.025 0l4 2.225c1.2.663 2.125 2.25 2.125 3.625v4.238c0 1.362-.937 2.95-2.125 3.625l-4 2.224c-.575.313-1.287.476-2.012.476M7.9 2.675 3.9 4.9c-.612.337-1.162 1.287-1.162 1.975v4.238c0 .7.55 1.637 1.163 1.975l4 2.225c.575.312 1.625.312 2.2 0l4-2.226c.612-.337 1.162-1.287 1.162-1.974V6.875c0-.7-.55-1.638-1.162-1.975l-4-2.225c-.575-.312-1.625-.312-2.2 0"
    />
  </svg>
);
export default SvgAutoCompleteBadgeIcon;
