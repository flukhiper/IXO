import { protectRoute } from '@/libs/auth/protectRoute';

import AttributeSection from './components/AttributeSection';
import { EnginProvider } from '@/contexts/EnginContext';

const DemoPage = async () => {
  const session = await protectRoute('/engine');
  console.log(session);

  return <>
    <EnginProvider>
      <div className='flex'>
        <div className='min-h-screen p-5 flex flex-col flex-1'>
          <h1>Engine</h1>
          <AttributeSection/>
        </div>
      </div>
    </EnginProvider>
  </>;
};

export default DemoPage;