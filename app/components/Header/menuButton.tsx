'use client';
import useLayoutStore from '@/app/store/useLayoutStore';
import Button from '../UI/button';

const MenuButton = () => {
  const toggle = useLayoutStore((store) => store.toggleMobileMenu);
  return (
    <Button
      onClick={toggle}
      className="md:hidden"
      data-collapse-toggle="navbar-default"
      type="button"
      aria-controls="navbar-default"
      aria-expanded="false"
    >
      <svg
        className="w-6 h-6"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clipRule="evenodd"
        ></path>
      </svg>
    </Button>
  );
};
export default MenuButton;
