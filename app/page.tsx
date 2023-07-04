import PageContent from './UI/pageContent';
import TextBounce from './UI/textBounce';

import API from './api/methods';
import Cubes from './components/cubes';
import TechGroup from './components/techs';
import './globals.css';
import { Animation } from './utils';

export default async function Home() {
  const techs = await API.getTechs();
  return (
    <PageContent>
      <div className="w-full h-full relative flex flex-col">
        <div className="-z-40 fixed top-0 left-0 w-full h-screen  ">{<Cubes />}</div>
        <div className="z-40 h-full w-full mt-6 flex flex-col justify-center  text-center">
          <h1 className="text-4xl  p-4">
            <TextBounce>
              Hi, my name is
              <b> Omer</b>
              .
              <br />I am a web developer.{' '}
            </TextBounce>
          </h1>
          <div className="flex w-full max-h-md max-w-lg flex-wrap p-4 gap-2 justify-center self-center">
            <TechGroup animation={Animation.cross} techs={techs} />
          </div>
        </div>
      </div>
    </PageContent>
  );
}
