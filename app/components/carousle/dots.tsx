import classNames from 'classnames';

type Props = {
  itemsLength: number;
  selectedIndex: number;
};
const Dots = ({ itemsLength, selectedIndex }: Props) => {
  const arr = new Array(itemsLength).fill(0);
  return (
    <div className="bg-transparent  flex gap-1  justify-center absolute bottom-0 w-full p-2 ">
      {arr.map((_, index) => {
        const selected = index === selectedIndex;
        return (
          <div
            className={classNames({
              'h-2 w-2 md:h-3 md:w-3 rounded-full transition-all duration-300 bg-black bg-opacity-50': true,
              // tune down the opacity if slide is not selected
              'opacity-50': !selected,
            })}
            key={index}
          ></div>
        );
      })}
    </div>
  );
};
export default Dots;
