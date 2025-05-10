import ClickCounter from '@/components/clickCounter';
import { GameProvider } from '@/contexts/game/GameContext';

import StageComponent from './components/Stage';
import Tools from './components/Tools';

const DemoPage = () => {

  return <>
    <GameProvider>
      <div className='min-h-screen p-5 flex flex-col'>
        <h1>Demo</h1>
        <Tools/>
        <ClickCounter/>
        <StageComponent />
      </div>
    </GameProvider>
  </>;
};

export default DemoPage;