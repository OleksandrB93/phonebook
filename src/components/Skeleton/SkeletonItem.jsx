import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonItem = (props) => (
  <ContentLoader
    speed={1}
    width={371}
    height={450}
    viewBox="0 0 383 450"
    backgroundColor="#00576f"
    foregroundColor="#3e7386"
    // backgroundOpacity={0.06}
    // foregroundOpacity={0.12}
    {...props}
  >
    <rect x="12" y="13" rx="5" ry="5" width="371" height="62" />
    <rect x="12" y="86" rx="5" ry="5" width="371" height="62" />
    <rect x="12" y="158" rx="5" ry="5" width="371" height="62" />
    <rect x="12" y="230" rx="5" ry="5" width="371" height="62" />
    <rect x="12" y="302" rx="5" ry="5" width="371" height="62" />
    <rect x="12" y="374" rx="5" ry="5" width="371" height="62" />
  </ContentLoader>
);

export default SkeletonItem;
