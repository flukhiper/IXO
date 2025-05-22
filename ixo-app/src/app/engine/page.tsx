import { protectRoute } from '@/libs/auth/protectRoute';
import ExpressionBuilder from '@/components/ExpressionBuilder';

import GameDefinitionBuilder from './components/GameDefinitionBuilder';

const DemoPage = async () => {
  const session = await protectRoute('/engine');
  console.log(session);

  return <>
    <div className='flex'>
      <div className='min-h-screen p-5 flex flex-col flex-1'>
        <h1>Engine</h1>
        <GameDefinitionBuilder/>
        <ExpressionBuilder/>
      </div>
    </div>
  </>;
};

export default DemoPage;