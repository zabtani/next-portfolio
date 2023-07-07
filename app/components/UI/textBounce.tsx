import { PropsWithChildren } from 'react';

const TextBounce = ({ children }: PropsWithChildren) => {
  return <div className="animate-pop inline-block    ">{children}</div>;
};
export default TextBounce;
