import { PropsWithChildren } from 'react';

type Props = PropsWithChildren & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, onClick, className, ...rest }: Props) => (
  <button
    onClick={onClick}
    data-collapse-toggle="navbar-default"
    type="button"
    className={`inline-flex items-center w-fit p-2 ml-3 text-sm text-gray-500 rounded-lg  focus:outline-none bg-app-button bg-gray-300 dark:bg-slate-100 md:bg-transparent md:dark:bg-transparent   md:h-auto md:w-auto ${className}`}
    {...rest}
  >
    {children}
  </button>
);

export default Button;
