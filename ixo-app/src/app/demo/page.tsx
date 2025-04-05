'use client';
import ClickCounter from '@/components/clickCounter';
import StageComponent from './components/stage';

const DemoPage = () => {

  return <>
    <div className='min-h-screen p-5 flex flex-col'>
      <h1>Demo</h1>
      <ClickCounter/>
      <StageComponent />
    </div>
  </>;
};

export default DemoPage;