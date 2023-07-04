import { PropsWithChildren } from 'react';

type Props = PropsWithChildren &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'secondary' | 'primary' };

const Button = ({ children, onClick, className, variant = 'primary', ...rest }: Props) => (
  <button
    onClick={onClick}
    data-collapse-toggle="navbar-default"
    type="button"
    className={
      variant === 'primary'
        ? `inline-flex items-center w-fit p-2 ml-3 text-sm text-gray-500 rounded-lg  focus:outline-none bg-app-button  ${className}`
        : variant === 'secondary'
        ? `bg-gray-300 hover:bg-gray-400 text-gray-800 w-fit font-bold p-2  rounded inline-flex items-center ${className}`
        : className
    }
    {...rest}
  >
    {children}
  </button>
);

export default Button;
