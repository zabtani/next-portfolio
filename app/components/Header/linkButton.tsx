'use client';
import useLayoutStore from '@/app/store/useLayoutStore';
import { PropsWithChildren } from 'react';
import useWindowSize from '../hooks/useWindowSize';

const LinkButton = ({ children }: PropsWithChildren) => {
  const toggle = useLayoutStore((store) => store.toggleMobileMenu);
  const { isMobile } = useWindowSize();
  if (!isMobile) return <>{children}</>;
  return (
    <button
      onClick={toggle}
      className="border-blue-500  text-left pl-2 md:pl-0  border-l-8 dark:border-rose-400   md:border-none   w-full  h-full  md:w-auto md:bg-transparent   "
    >
      {children}
    </button>
  );
};

export default LinkButton;
