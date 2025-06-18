import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const BagWithTimeIcon = ({
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
      d="M9.172 17.5H8.005c-2.988 0-4.482 0-5.41-.946-.928-.945-.928-2.468-.928-5.512 0-3.045 0-4.567.928-5.513s2.422-.946 5.41-.946h3.169c2.987 0 4.481 0 5.41.946.713.728.878 1.797.916 3.638"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m15.708 15.708-1.125-.75v-1.875m-3.75 1.5a3.75 3.75 0 1 0 7.5 0 3.75 3.75 0 0 0-7.5 0M13.333 4.583l-.082-.257c-.413-1.284-.62-1.925-1.11-2.292s-1.144-.367-2.448-.367h-.22c-1.304 0-1.956 0-2.447.367s-.697 1.008-1.11 2.292l-.083.257"
    />
  </svg>
);
export default BagWithTimeIcon;
