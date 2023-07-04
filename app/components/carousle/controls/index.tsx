import React from 'react';
import Arrow from './arrow';

type Props = {
  onPrev(): void;
  onNext(): void;
};

const Controls = ({ onPrev, onNext }: Props) => {
  return (
    <div className="flex justify-between gap-2 absolute z-10 top-0 h-full w-full">
      <Arrow onClick={onPrev} direction="prev" />
      <Arrow onClick={onNext} direction="next" />
    </div>
  );
};

export default Controls;
