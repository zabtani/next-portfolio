import { PropsWithChildren } from 'react';

const Paragraph = ({
  children,
  classNames,
  hideEdgeLines,
  variant = 'p',
}: PropsWithChildren & { classNames?: string; hideEdgeLines?: boolean; variant?: 'p' | 'div' }) => (
  <div
    className={`${
      !hideEdgeLines ? 'p-container' : ''
    } rounded-tl-lg rounded-br-lg bg-white dark:bg-zinc-800 p-2  border-t-6 border-t-rose-600 ${classNames}`}
  >
    {!hideEdgeLines && <span className=" top-0 left-0 p-side-edge w-full h-full absolute" />}
    {variant === 'p' ? <p className="text-sm">{children}</p> : <div className="text-sm">{children}</div>}
  </div>
);

export default Paragraph;
//shadow shadow-blue-500/50   dark:shadow dark:shadow-rose-400/50
