import ClickCounter from '@/components/clickCounter';
import { GameProvider } from '@/contexts/GameContext';
import { SelectionProvider } from '@/contexts/SelectionContext';

import StageComponent from './components/Stage';
import Tools from './components/Tools';
import Menu from './components/menu/Menu';

const DemoPage = () => {

  return <>
    <GameProvider>
      <SelectionProvider>
        <div className='flex'>
          <div className='min-h-screen p-5 flex flex-col flex-1'>
            <h1>Demo</h1>
            <Tools/>
            <ClickCounter/>
            <StageComponent />
          </div>
          <div>
            <Menu />
          </div>
        </div>
      </SelectionProvider>
    </GameProvider>
  </>;
};

export default DemoPage;