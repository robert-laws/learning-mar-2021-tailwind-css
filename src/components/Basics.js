import React from 'react';
import BooksImage from './images/books.jpg';

const Basics = () => {
  return (
    <div className='w-full bg-yellow-100'>
      <div className='group container mx-auto p-3'>
        <h1 className='lg:text-3xl md:text-2xl'>Tailwind App</h1>
        <h2 className='text-xl font-bold'>How to use Tailwind</h2>
        <p className='text-2xl font-thin'>Hello - normal</p>
        <p className='text-2xl font-thin antialiased'>Hello - antialiased</p>
        <p className='text-2xl font-thin subpixel-antialiased'>
          Hello - subpixel antialiased
        </p>
        <p className='p-3 text-bold text-3xl text-white text-opacity-75 bg-red-800 text-right'>
          Text Directives
        </p>
        <p className='capitalize'>learning outcomes</p>
        <p className='overflow-clip overflow-hidden h-24 tracking-normal shadow-2xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quas
          numquam modi velit exercitationem quibusdam expedita temporibus
          voluptates omnis eligendi in neque ad provident nostrum atque,
          voluptatibus, porro natus iure aspernatur accusantium alias optio
          ipsam tempore ratione! Sit ex, odit similique cupiditate labore et,
          laudantium aliquid ad quod, tenetur officiis sequi. Inventore numquam
        </p>

        <div className='py-2 px-4 m-6 border border-dashed rounded-lg border-black border-opacity-20 bg-blue-200 bg-opacity-30 ring-8 ring-red-500 ring-opacity-50 ring-offset-yellow-100 ring-offset-8'>
          <ul className='list-disc list-inside'>
            <li>item1</li>
            <li>item2</li>
            <li>item3</li>
            <li>item4</li>
            <li>item5</li>
          </ul>
        </div>
        <div className='divide-y divide-dashed divide-opacity-20 divide-black m-4 p-2 space-y-4 space bg-emerald-100 bg-opacity-50'>
          <div>Item #1</div>
          <div>Item #2</div>
          <div>Item #3</div>
          <div>Item #4</div>
          <div>Item #5</div>
        </div>
        <div className='m-3 p-3 border bg-gradient-to-b from-red-100 to-blue-100 shadow'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo enim
            vero hic quod repudiandae accusantium pariatur repellendus esse
            sequi quae? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus ratione quo recusandae cum praesentium cumque, id nam
            impedit magnam cupiditate earum? Facilis, accusamus modi!
          </p>
        </div>
        <div className='m-3 p-3 border bg-gradient-to-l from-red-100'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo enim
            vero hic quod repudiandae accusantium pariatur repellendus esse
            sequi quae? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus ratione quo recusandae cum praesentium cumque, id nam
            impedit magnam cupiditate earum? Facilis, accusamus modi!
          </p>
        </div>
        <div className='m-3 p-3 border from-green-500 via-blue-400 to-red-500 bg-gradient-to-l'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo enim
            vero hic quod repudiandae accusantium pariatur repellendus esse
            sequi quae? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus ratione quo recusandae cum praesentium cumque, id nam
            impedit magnam cupiditate earum? Facilis, accusamus modi!
          </p>
        </div>
        <div
          className='text-white h-96 w-full bg-auto bg-right-bottom'
          style={{ backgroundImage: `url(${BooksImage})` }}
        >
          Auto
        </div>
        <div
          className='text-white h-96 w-full bg-contain bg-no-repeat bg-center'
          style={{ backgroundImage: `url(${BooksImage})` }}
        >
          Contain
        </div>
        <div
          className='text-white h-96 w-full bg-cover bg-bottom'
          style={{ backgroundImage: `url(${BooksImage})` }}
        >
          Cover
        </div>
      </div>
      <button className='btn btn-purple'>New Division</button>
    </div>
  );
};

export default Basics;
