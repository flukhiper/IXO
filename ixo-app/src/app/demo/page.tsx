import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import ClickCounter from '@/components/clickCounter';
import { GameProvider } from '@/contexts/GameContext';
import { SelectionProvider } from '@/contexts/SelectionContext';

import { authOptions } from '../api/auth/[...nextauth]/route';

import StageComponent from './components/Stage';
import Tools from './components/Tools';
import Menu from './components/menu/Menu';

const DemoPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/login?callbackUrl=/demo');
  }

  console.log('session', session);

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