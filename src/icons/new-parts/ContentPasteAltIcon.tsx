import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgContentPasteAltIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 12 14"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M6.502.333c.772 0 1.407.584 1.49 1.334h1.175a1.5 1.5 0 0 1 1.496 1.397l.004.103a.5.5 0 0 1-.432.494l-.069.006a.5.5 0 0 1-.495-.432l-.004-.068a.5.5 0 0 0-.432-.496l-.068-.004H7.745a1.5 1.5 0 0 1-1.243.662H4.165a1.5 1.5 0 0 1-1.244-.662H1.5a.5.5 0 0 0-.495.432L1 3.167v9.003a.5.5 0 0 0 .432.495l.068.005h2a.5.5 0 0 1 .495.431L4 13.17a.5.5 0 0 1-.5.5h-2a1.5 1.5 0 0 1-1.497-1.396L0 12.17V3.167A1.5 1.5 0 0 1 1.397 1.67l.103-.003h1.175A1.5 1.5 0 0 1 4.165.333zm3.998 4a1.5 1.5 0 0 1 1.497 1.398l.003.102v6.334a1.5 1.5 0 0 1-1.397 1.496l-.103.004H6.167a1.5 1.5 0 0 1-1.497-1.398l-.003-.102V5.833a1.5 1.5 0 0 1 1.397-1.496l.103-.004zm-3.998-3H4.165a.498.498 0 0 0 0 .996h2.337a.498.498 0 1 0 0-.996"
    />
  </svg>
);
export default SvgContentPasteAltIcon;
