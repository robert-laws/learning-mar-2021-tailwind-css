import React from 'react';

const HorizontalSteps = () => {
  return (
    <div>
      <section className='text-gray-600 body-font'>
        <div className='container pb-4 pt-24 mx-auto flex flex-wrap flex-col'>
          <div className='flex flex-wrap flex-row w-full justify-evenly'>
            <div className='flex-shrink-0 w-16 h-16 rounded-full bg-blue-600 inline-flex items-center justify-center relative -mt-8 z-10'>
              <span className='text-4xl text-white '>1</span>
              <p className='mt-24 text-black absolute text-center font-medium'>
                Course
              </p>
            </div>
            <div className='flex-shrink-0 w-16 h-16 rounded-full bg-gray-200 inline-flex items-center justify-center relative -mt-8 z-10'>
              <span className='text-4xl text-black'>2</span>
              <p className='mt-24 text-black absolute text-center font-medium'>
                Session
              </p>
            </div>
            <div className='flex-shrink-0 w-16 h-16 rounded-full bg-gray-200 inline-flex items-center justify-center relative -mt-8 z-10'>
              <span className='text-4xl text-black'>3</span>
              <p className='mt-24 text-black absolute text-center font-medium'>
                Modules
              </p>
            </div>
            <div className='flex-shrink-0 w-16 h-16 rounded-full bg-gray-200 inline-flex items-center justify-center relative -mt-8 z-10'>
              <span className='text-4xl text-black'>4</span>
              <p className='mt-24 text-black absolute text-center font-medium'>
                Review
              </p>
            </div>
          </div>
          <div className='flex flex-row w-full justify-evenly -mt-8'>
            <div className='w-full border-blue-500 border-0 border-t-4'></div>
            <div className='w-full border-gray-300 border-0 border-t-4'></div>
            <div className='w-full border-gray-300 border-0 border-t-4'></div>
            <div className='w-full border-gray-300 border-0 border-t-4'></div>
            <div className='w-full border-gray-300 border-0 border-t-4'></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HorizontalSteps;
