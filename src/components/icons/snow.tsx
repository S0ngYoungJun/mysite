import * as React from "react";
import { StaticImage } from "gatsby-plugin-image"



export default function IconSnow() {
  return (
    <StaticImage
      src="../../images/flower1.png" // 'public' 폴더 내의 SVG 파일 경로
      width={30}
      height={30}
      alt="Snow Icon"
    />
  );
}
