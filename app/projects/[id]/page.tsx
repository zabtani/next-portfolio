import API from '../../api/methods';
import Carousel from '@/app/components/carousle';
import SkeletonImage from '@/app/components/skeletonImage';
import TechGroup from '@/app/components/techs';
import Tags from './tags';
import PageButtons from './buttons';
import PageContent from '@/app/components/UI/pageContent';
import Paragraph from '@/app/components/UI/paragraph';
import { Animation } from '@/app/utils';

const Project = async ({ params }: any) => {
  const project = await API.getProject(`${params.id}`);

  return (
    <PageContent>
      <div className="flex w-full   justify-between">
        <div className="flex flex-col w-full">
          <div className="flex justify-between w-full ">
            <h1 className="text-4xl font-extrabold">{project.name}</h1>
            <div className="flex w-fit self-end flex-col ">
              <Tags.Year>{project.year}</Tags.Year>
              <Tags.Favorite>Favorite</Tags.Favorite>
            </div>
          </div>
          <h2>{project.summary}</h2>
        </div>
      </div>
      <div className="flex gap-4 mt-4">
        <Paragraph variant="div" classNames="self-start md:mt-0 min-w-[250px] w-full">
          <div className="flex p-1.5  pl-0  gap-1 relative  ">
            <TechGroup animation={Animation.right} techs={project.techs} />
          </div>
          <p> {project.info}</p>
          <div className="button-group flex  p-2.5  pl-0 text-sm gap-1 w-full">
            <PageButtons.AllProjects href="/projects">Back</PageButtons.AllProjects>
            <PageButtons.RepoButton href={project.links.repo_url}>Repo</PageButtons.RepoButton>
            <PageButtons.DemoButton href={project.links.demo_url}>Demo</PageButtons.DemoButton>
          </div>
        </Paragraph>
        <div className="flex min-w-[650px] h-[365px] justify-between">
          <Carousel loop skipSnaps={false}>
            {project.images.map((src: string, index: number) => {
              return (
                <div className="relative w-full h-full flex-[0_0_100%]" key={src}>
                  <SkeletonImage priority={index === 0} src={src} alt="alt" />
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </PageContent>
  );
};

export default Project;
