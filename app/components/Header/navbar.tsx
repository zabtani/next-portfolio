import MenuButton from './menuButton';
import NavList from './navList';

const Navbar = () => {
  return (
    <nav
      style={{ transitionProperty: 'background-color' }}
      className="bg-hero-pattern  dark:bg-hero-pattern-dark  z-200  shadow shadow-blue-500 dark:shadow dark:shadow-rose-400 sticky w-full top-0 z-40 bg-white 0 dark:bg-zinc-900 transition ease-in-out duration-600  "
    >
      <div className="w-full md:w-11/12 flex flex-wrap items-center justify-between mx-auto    max-w-[1600px]">
        <Logo />
        <MenuButton />
        <NavList />
      </div>
    </nav>
  );
};

const Logo = () => (
  <div className="shadow-none md:shadow-lg  md:shadow-blue-600/70  md:dark:shadow-rose-600/70 bg-blue-500  dark:bg-rose-600    rounded-sm font-mono flex items-center ml-1 md:ml-0 ">
    <ConsoleSVG />
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

const ConsoleSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="w-7 h-7 ">
    <path
      fillRule="evenodd"
      d="M2.25 6a3 3 0 013-3h13.5a3 3 0 013 3v12a3 3 0 01-3 3H5.25a3 3 0 01-3-3V6zm3.97.97a.75.75 0 011.06 0l2.25 2.25a.75.75 0 010 1.06l-2.25 2.25a.75.75 0 01-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06zm4.28 4.28a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"
      clipRule="evenodd"
    />
  </svg>
);

export default Navbar;
