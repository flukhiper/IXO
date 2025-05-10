import ClickCounter from '@/components/clickCounter';
import { GameProvider } from '@/contexts/GameContext';
import { SelectionProvider } from '@/contexts/SelectionContext';

import StageComponent from './components/Stage';
import Tools from './components/Tools';

const DemoPage = () => {

  return <>
    <GameProvider>
      <SelectionProvider>
        <div className='min-h-screen p-5 flex flex-col'>
          <h1>Demo</h1>
          <Tools/>
          <ClickCounter/>
          <StageComponent />
        </div>
      </SelectionProvider>
    </GameProvider>
  </>;
};

export default DemoPage;