import { useState } from "react";

import Game from "../components/Game";
import MainMenu from "../components/MainMenu";

const Home = () => {
  const [playing, setPlaying] = useState(false);

  const start = () => {
    setPlaying(true);
  };

  const gameover = () => {
    setPlaying(false);
  };

  return (
    <div className="flex flex-col flex-center justify-center h-screen">
      <div className="flex flex-col text-center items-center">
        {playing ? (
          <Game onGameover={gameover} />
        ) : (
          <MainMenu onStart={start}/>
        )}
      </div>
    </div>
  );
};

export default Home;
