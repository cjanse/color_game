import Image from 'next/image';

const MainMenu = (props) => {
    return (
      <>
        <div className="bg-gray-400">
        <div className="text-7xl font-bold italic mb-4 bg-yellow-700 text-white">Color Game</div>
        <Image height={100} width={100} src={`/color.jpg `}></Image>
        <div className="text-lg font-serif mb-3">ANSWER TEN QUESTIONS BY TYPING IN THE WORD (NOT THE COLOR)</div>
        <button
          className="w-48 bg-indigo-500 text-white font-bold rounded-lg text-xl p-4 hover:bg-indigo-700"
          onClick={props.onStart}
        >
          New Game
        </button>
        </div>
      </>
    );
  };
  
  export default MainMenu;