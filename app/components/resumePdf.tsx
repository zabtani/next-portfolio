'use client';
import { Document, Page, pdfjs } from 'react-pdf';
import { BE_URL } from '../api/client';
import { PropsWithChildren, useEffect } from 'react';
import useWindowSize from './hooks/useWindowSize';
import Skeleton from './skeleton';
import Button from './UI/button';
const ResumePDF = () => {
  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  }, []);
  const { isMobile } = useWindowSize();
  return (
    <div className="pdf flex flex-col mt-6 ">
      <form method="get" className="flex w-full justify-center" action={`${BE_URL}pdf/`}>
        <DownloadButton>{'Download'} PDF</DownloadButton>
      </form>
      <Document
        className="min-h-[1400px]"
        loading={() => (
          <div className="flex justify-center align-middle ">
            <Skeleton classNames="w-[80vw] md:w-[50vw] h-[100vh] " />
          </div>
        )}
        file={`${BE_URL}pdf/`}
      >
        {
          <Page
            loading=""
            renderAnnotationLayer={false}
            renderTextLayer={false}
            width={isMobile ? 340 : 900}
            pageNumber={1}
          />
        }
      </Document>
    </div>
  );
};

export default ResumePDF;

const DownloadButton = ({ children }: PropsWithChildren) => (
  <Button type="submit" className="mb-6 self-center ">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      className="w-6 h-6 mr-2"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
      />
    </svg>
    {children}
  </Button>
);
