'use client';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import React from 'react';
import { PropsWithChildren, useEffect, useState } from 'react';
import Dots from './dots';
import Controls from './controls';

type Props = PropsWithChildren & EmblaOptionsType;

const Carousel = ({ children, ...options }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    function selectHandler() {
      const index = emblaApi?.selectedScrollSnap();
      setSelectedIndex(index || 0);
    }

    emblaApi?.on('select', selectHandler);

    return () => {
      emblaApi?.off('select', selectHandler);
    };
  }, [emblaApi]);

  const length = React.Children.count(children);

  return (
    <div className="border-gray-500  self-center w-full h-full">
      <div className="rounded-md overflow-hidden w-full h-full relative" ref={emblaRef}>
        <div className="flex w-full h-full">{children}</div>
        <Controls onNext={() => emblaApi?.scrollNext()} onPrev={() => emblaApi?.scrollPrev()} />
        <Dots itemsLength={length} selectedIndex={selectedIndex} />
      </div>
    </div>
  );
};
export default Carousel;
