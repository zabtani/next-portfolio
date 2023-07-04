import Link from 'next/link';
import API from '../api/methods';
import { SummarizedProjectProperties } from '../interface';
import ProjectSummary from '../projectSummary';
import PageHeading from '../UI/pageHeadeing';
import { Animation, getSlideAnimation } from '../utils';
import PageContent from '../UI/pageContent';

const Projects = async () => {
  const projects = await API.getSummarizedProjects();
  return (
    <PageContent>
      <PageHeading>My works</PageHeading>
      <div className="flex justify-center w-full h-full flex-wrap  pb-10  self-center ">
        {projects.map(({ id, ...rest }: SummarizedProjectProperties, index: number) => {
          return (
            <Link
              className={getSlideAnimation(index, Animation.cross)}
              key={id}
              href={`projects/${id}`}
              passHref
            >
              <ProjectSummary {...rest} />
            </Link>
          );
        })}
      </div>
    </PageContent>
  );
};

export default Projects;
