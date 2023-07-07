import { PropsWithChildren } from 'react';
import TextBounce from './textBounce';
const PageHeading = ({ children }: PropsWithChildren) => (
  <h1 className="text-5xl h-full w-full mb-4  text-center">
    <TextBounce>{children} </TextBounce>
  </h1>
);
export default PageHeading;
