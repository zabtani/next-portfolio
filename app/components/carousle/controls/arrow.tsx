import React from 'react';

const Arrow = ({ direction, onClick }: { onClick: () => void; direction: 'prev' | 'next' }) => {
  const [isDisabled, setIsDisabled] = React.useState(false);

  const handleClick = () => {
    console.log('click');
    onClick();
    setIsDisabled(true);
    setTimeout(() => {
      setIsDisabled(false);
    }, 200);
  };

  return (
    <button
      type="button"
      className={`absolute 
      ${direction === 'prev' ? 'left-0' : 'right-0'}
      z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none`}
      onClick={handleClick}
      disabled={isDisabled}
    >
      <span
        className={`pointer-events-none inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 border-white border-4 bg-gray-300/80`}
      >
        <svg
          aria-hidden="true"
          className={`w-5 h-5 sm:w-6 sm:h-6`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {direction === 'prev' ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          )}
        </svg>
        <span className="sr-only">{direction === 'prev' ? 'Previous' : 'Next'}</span>
      </span>
    </button>
  );
};
export default Arrow;
