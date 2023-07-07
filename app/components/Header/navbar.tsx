import Avatar from './avatar';
import MenuButton from './menuButton';
import NavList from './navList';
import { PropsWithChildren } from 'react';
interface Props {
  avatarSrc: string;
}
const Navbar = ({ avatarSrc }: Props) => {
  return (
    <nav
      style={{ transitionProperty: 'background-color' }}
      className=" bg-hero-pattern  dark:bg-hero-pattern-dark  z-200  shadow   sticky w-full top-0 z-40 bg-white 0 dark:bg-zinc-900 transition ease-in-out duration-600  "
    >
      <div className="nav-content relative w-full md:w-11/12 flex flex-wrap items-center justify-between mx-auto    max-w-[1600px]">
        <ConsoleText>
          <Avatar src={avatarSrc} />
        </ConsoleText>
        <MenuButton />
        <NavList />
      </div>
    </nav>
  );
};

const ConsoleText = ({ children }: PropsWithChildren) => (
  <div
    className="bg-gradient-to-r from-transparent dark:via-rose-600
    via-blue-500 to-blue-500 dark:to-rose-600 shadow-none   pl-7  md:shadow-blue-600/70  md:dark:shadow-rose-600/70        rounded-md font-mono flex items-center ml-1 md:ml-0 p-1 "
  >
    {children}
    <div className=" overflow-hidden transition ease-in-out duration-600">
      <h1 className="pl-1 self-center text-xs md:text-sm font-semibold whitespace-nowrap text-black ">
        omer_zabtani
        <span className="relative pr-2">
          <span className="h-20 pt-2 overflow-x-hidden whitespace-nowrap text-brand-accent">/portfolio</span>
          <span
            className="ml after:border-l-[1px] after:border-t-4 after:border-b-4
           after:border-blue-500  dark:after:border-rose-600 cursor  after:bg-black 
            absolute  -bottom-1 left-0 -top-1 inline-block dark:bg-rose-600
           bg-blue-500   after:transition   after:ease-in-out duration-600   w-full animate-type "
          ></span>
        </span>
      </h1>
    </div>
  </div>
);

export default Navbar;
