import { AiOutlineArrowUp } from 'react-icons/ai';

const HomeButton = () => {
  return (
    <a
      href="#main"
      className="fixed bottom-[20px] right-[20px] bg-white z-50 border-2 border-white rounded-full p-4 cursor-pointer hover:scale-105 transition-all"
    >
      <AiOutlineArrowUp size={30} />
    </a>
  );
};
export default HomeButton;
