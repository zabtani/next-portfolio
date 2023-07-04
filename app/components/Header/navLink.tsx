import Link from 'next/link';
import LinkButton from './linkButton';

export interface NavLinkProps {
  text: string;
  path: string;
}

const NavLink = ({ text, path, active }: NavLinkProps & { active: boolean }) => {
  return (
    <li
      className={`  self-center w-full transition duration-500 scale-100  ${
        active ? '' : 'md:hover:scale-110 '
      } `}
    >
      <Link
        href={path}
        className={`text-sm bg-transparent  md:bg-slate-200/60 md:dark:bg-zinc-600/70 p-2 md:p-2 mr-2 block rounded-none md:inline w-full  md:rounded  text-black   bg-app-button 
        ${
          active
            ? 'border-0  md:border-[3px] md:border-blue-500   md:dark:border-rose-400/50   pointer-events-none'
            : ''
        } `}
        aria-current="page"
      >
        <LinkButton>{text}</LinkButton>
      </Link>
    </li>
  );
};
export default NavLink;
