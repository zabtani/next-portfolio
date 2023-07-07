import Link, { LinkProps } from 'next/link';
import { PropsWithChildren } from 'react';
import Button from './button';

export interface LinkButtonProps extends LinkProps, PropsWithChildren {
  clasNames?: string;
}
const LinkButton = ({ children, clasNames, ...rest }: LinkButtonProps) => (
  <Button className={clasNames}>
    <Link className="flex items-center" {...rest}>
      {children}
    </Link>
  </Button>
);

export default LinkButton;
