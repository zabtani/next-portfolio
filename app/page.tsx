import PageContent from './components/UI//pageContent';
import API from './api/methods';
import TechGroup from './components/techs';
import './globals.css';
import { Animation } from './utils';
import Paragraph from './components/UI/paragraph';
import Cubes from './components/cubes';

export default async function Home() {
  const techs = await API.getTechs();
  return (
    <PageContent>
      <div className="w-full h-full relative flex flex-col">
        <div className="-z-40 fixed top-0 left-0 w-full h-screen  ">{<Cubes />}</div>
        <div className="z-40 h-full w-full mt-6 flex flex-col justify-center  text-center">
          <Paragraph variant="div" classNames="w-fit self-center">
            <h1 className="text-4xl  p-4">
              Hi, my name is
              <b> Omer</b>
              .
              <br />I am a web developer.{' '}
            </h1>
          </Paragraph>
          <div className="flex w-full max-h-md max-w-lg flex-wrap p-4 gap-2 justify-center self-center">
            <TechGroup animation={Animation.cross} techs={techs} />
          </div>
        </div>
      </div>
    </PageContent>
  );
}
