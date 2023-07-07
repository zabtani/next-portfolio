import SkeletonImage from '../skeletonImage';
interface AvatarProps {
  src: string;
}
const Avatar = ({ src }: AvatarProps) => {
  return (
    <div className="relative rounded-full w-9 h-9  overflow-hidden mr-2 ">
      <SkeletonImage alt="omer zabtani" fill src={src} />
    </div>
  );
};
export default Avatar;
