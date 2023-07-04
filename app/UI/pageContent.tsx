import { PropsWithChildren } from 'react';

const PageContent = ({ children }: PropsWithChildren) => (
  <div className="  flex flex-col   w-11/12 justify-center mx-auto mt-4 md:p-2 md:pb-10 max-w-[1600px] ">
    {children}
  </div>
);

export default PageContent;
