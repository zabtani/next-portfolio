'use client';
import useLayoutStore from '@/app/store/useLayoutStore';
import ModeButton from './mode';
import NavLink, { NavLinkProps } from './navLink';
import { usePathname } from 'next/navigation';
import Button from '../UI/button';

const navLinks: NavLinkProps[] = [
  { text: 'Home', path: '/' },
  { text: 'Resume', path: '/resume' },
  { text: 'Contact', path: '/contact' },
  { text: 'Projects', path: '/projects' },
];
const NavList = () => {
  const currentPathName = usePathname();
  const isMobileMenuClose = useLayoutStore((store) => store.isMobileMenuClose);
  const sideButtonClass =
    'bg-gray-300 dark:bg-slate-100 md:bg-transparent md:dark:bg-transparent h-9 w-9 md:h-auto md:w-auto';

  return (
    <div
      className={`bg-white md:bg-transparent   flex md:p-2 fixed  top-10 md:relative md:top-0 md:w-auto bg-auto w-full  overflow-hidden  ${
        !isMobileMenuClose ? 'h-0 ' : 'h-48 mt-[3px]'
      }  p-0  md:p-0
        md:h-auto transition-all ease-in-out duration-600 font-medium md:flex flex-col
        rounded-sm  md:flex-row md:space-x-1 md:mt-0 md:border-0  
       dark:border-gray-600`}
    >
      <ul className="   h-48  md:h-auto   flex flex-col md:flex  md:flex-row z-100  ">
        {navLinks.map((props) => (
          <NavLink key={props.text} {...props} active={currentPathName === props.path} />
        ))}
        <li className=" flex w-full justify-end  p-1 pl-0 pt-0 md:p-0  ">
          <ModeButton />
          <Button>
            <GithubSVG />
          </Button>
        </li>
      </ul>
    </div>
  );
};
export default NavList;

const GithubSVG = () => (
  <svg
    height="32"
    aria-hidden="true"
    viewBox="0 0 16 16"
    version="1.1"
    width="32"
    data-view-component="true"
    className="dark:fill-white"
  >
    <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
  </svg>
);
