import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const PlayStoreIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 21"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="m11.113 10.052 3.45-3.45L3.42.34c-.738-.4-1.43-.455-2.037-.02zm4.038 4.039 3.587-2.017c.7-.392 1.083-.947 1.083-1.563 0-.615-.384-1.172-1.082-1.564l-3.247-1.823-3.655 3.654zM.784 1.169c-.075.23-.117.486-.117.768v17.156c0 .444.098.827.275 1.131l9.447-9.447zm10.33 10.33-9.395 9.396q.271.104.578.105.548 0 1.13-.322l10.797-6.063z"
    />
  </svg>
);
export default PlayStoreIcon;
