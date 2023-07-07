const Skeleton = ({ classNames }: { classNames: string }) => (
  <div className={`skeleton  flex items-center flex-col    ${classNames}`}>
    <div
      data-placeholder
      className="h-full w-full overflow-hidden relative  bg-slate-600 dark:bg-zinc-700 bg-opacity-10"
    ></div>
  </div>
);
export default Skeleton;
