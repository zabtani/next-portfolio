'use client';
import { usePathname } from 'next/navigation';
import { PropsWithChildren } from 'react';

const Main = ({ children }: PropsWithChildren) => {
  const pathname = usePathname();
  return (
    <main
      style={{ overflow: 'overlay' }}
      className={`${
        pathname !== '/' ? 'bg-hero-pattern-transparent  dark:bg-hero-pattern-dark-transparent' : ''
      } flex flex-col w-full h-full `}
    >
      {children}
    </main>
  );
};
export default Main;
