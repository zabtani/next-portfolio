'use client';
import { SummarizedProjectProperties } from './interface';
import { Tilt } from 'react-tilt';
import SkeletonImage from './components/skeletonImage';
const ProjectSummary = ({ name, summary, preview_image }: Omit<SummarizedProjectProperties, 'id'>) => {
  return (
    <Tilt
      className="
     tilt flex flex-col relative overflow-hidden
     w-72 h-52 m-4 md:w-56 md:h-40 text-sm md:text-lg
   bg-slate-600 dark:bg-zinc-700 bg-opacity-10  
     shadow-lg  border-transparent   border-[10px] dark:shadow-white/10 hover:border-blue-500/70 dark:hover:border-red-500/70
     hover:shadow-2xl   
     rounded-sm
     transition-shadow duration-1000 ease-in-out"
    >
      {preview_image && (
        <div className="relative h-full w-full ">
          <SkeletonImage alt="project summary" fill src={preview_image} />
          <div className="absolute inset-0 shadow-inset-shadow-white dark:shadow-inset-shadow-black"></div>
        </div>
      )}
      <div className="pl-1 pb-1  text-black dark:text-white absolute w-full h-full flex flex-col file justify-end text-sm bottom-0 ">
        <h2 className="font-bold">{name}</h2>
        <p className="text-xs">{summary}</p>
      </div>
    </Tilt>
  );
};
export default ProjectSummary;
