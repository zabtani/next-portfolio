import API from '../../api/methods';
import Carousel from '@/app/components/carousle';
import SkeletonImage from '@/app/components/skeletonImage';
import TechGroup from '@/app/components/techs';
import PageContent from '@/app/UI/pageContent';
import Tags from './tags';
import PageButtons from './buttons';
import Paragraph from '@/app/UI/paragraph';

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
        <div className="flex flex-col gap-2">
          <Paragraph classNames="self-start md:mt-0 min-w-[250px] w-full">{project.info}</Paragraph>
          <div className="flex p-1.5  pl-0  gap-1">
            <TechGroup techs={project.techs} />
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            <PageButtons.RepoButton link={project.links.repo_url}>Github Repo</PageButtons.RepoButton>
            <PageButtons.DemoButton link={project.links.demo_url}>Live Demo</PageButtons.DemoButton>
            <PageButtons.AllProjects link="/projects">All Projects</PageButtons.AllProjects>
          </div>
        </div>

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
