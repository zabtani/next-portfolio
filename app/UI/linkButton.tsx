import Button from '@/app/UI/button';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

export interface LinkButtonProps extends PropsWithChildren {
  link: string;
  clasNames?: string;
}
const LinkButton = ({ link, children, clasNames }: LinkButtonProps) => (
  <Button className={clasNames} variant="secondary">
    <Link className="flex items-center" href={link}>
      {children}
    </Link>
  </Button>
);

export default LinkButton;
