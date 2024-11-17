import clsx from 'clsx';

const Button = ({ btnText, btnType, btnIcon, handleClick, className }) => {
  return (
    <button
      onClick={handleClick}
      className={clsx(
        'font-medium transition duration-300 ease-in-out transform hover:scale-105',
        btnType == 'filled'
          ? 'rounded-lg px-8 py-3 bg-[#74b5ff] text-slate-800 focus:ring-2 focus:ring-primary'
          : btnType == 'outlined'
          ? 'rounded-lg border border-[#74b5ff] px-8 py-3 text-[#74b5ff]'
          : btnType == 'icon'
          ? 'rounded-full hover:bg-gray-100 p-2'
          : 'rounded-lg text-primary hover:bg-gray-100',
        className
      )}
    >
      {btnIcon}
      {btnText}
    </button>
  );
};

export default Button;
