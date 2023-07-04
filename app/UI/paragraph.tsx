import { PropsWithChildren } from 'react';

const Paragraph = ({ children, classNames }: PropsWithChildren & { classNames?: string }) => (
  <p
    className={`shadow shadow-blue-500/50 dark:shadow dark:shadow-rose-400/50    bg-white dark:bg-zinc-800 p-2  rounded-md    ${classNames}`}
  >
    {children}
  </p>
);

export default Paragraph;
