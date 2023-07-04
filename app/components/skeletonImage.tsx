'use client';

import Image, { ImageProps } from 'next/image';
import React from 'react';
import Skeleton from './skeleton';

const SkeletonImage = (props: ImageProps) => {
  const [isSkeleton, setIsSkeleton] = React.useState(true);
  return (
    <>
      {isSkeleton && <Skeleton classNames="w-full h-full" />}
      <Image {...props} alt="image" fill onLoadingComplete={() => setIsSkeleton(false)} />
    </>
  );
};
export default SkeletonImage;
