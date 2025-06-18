import React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const PanToolIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 17 20"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M7.375 19.167q-.625 0-1.167-.281a2.4 2.4 0 0 1-.896-.802L.396 10.875a.84.84 0 0 1-.146-.541.73.73 0 0 1 .25-.5q.395-.396.938-.459a1.36 1.36 0 0 1 .979.25l2.416 1.688v-7.98q0-.354.24-.593.24-.24.594-.24t.593.24.24.593v9.584q0 .5-.448.74a.77.77 0 0 1-.864-.053l-1.771-1.25 3.27 4.771q.105.166.292.271.188.105.396.104h5.792q.687 0 1.177-.49.49-.489.49-1.177V4.168q0-.354.239-.594.24-.24.594-.24t.593.24.24.594v11.667a3.2 3.2 0 0 1-.98 2.354 3.2 3.2 0 0 1-2.353.979zM9 .833q.354 0 .594.24t.24.594v7.5q0 .354-.24.594A.8.8 0 0 1 9 10a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.594v-7.5q0-.354.24-.594T9 .833m3.333.834q.354 0 .594.24t.24.593v6.667q0 .354-.24.594a.8.8 0 0 1-.594.24.8.8 0 0 1-.593-.24.8.8 0 0 1-.24-.594V2.5q0-.354.24-.594t.593-.24"
    />
  </svg>
);
export default PanToolIcon;
