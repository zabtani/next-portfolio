import Image from 'next/image';
import { Tech } from '../interface';
import { Animation, getSlideAnimation } from '../utils';

interface Props {
  techs: Tech[];
  animation?: Animation;
}

const TechGroup = ({ techs, animation = Animation.left }: Props) => {
  return (
    <>
      {techs.map(({ id, name, image }, index) => {
        return (
          <div
            key={id}
            className={`flex p-1 bg-gray-300 dark:bg-zinc-700 w-auto rounded-md max-h-8
             ${getSlideAnimation(index, animation)}`}
          >
            <div className="mr-1  w-[28px] h-[28px] ">
              <Image alt="chip" width={28} height={28} src={image} />
            </div>
            <span>{name}</span>
          </div>
        );
      })}
    </>
  );
};
export default TechGroup;
