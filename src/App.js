import './App.css';

function App() {
  return (
    <div className='w-full bg-yellow-100'>
      <div className='group container mx-auto bg-teal-500 hover:bg-emerald-800 p-3'>
        <h1 className='lg:text-3xl md:text-2xl group-hover:text-white'>
          Tailwind App
        </h1>
        <h2 className='text-xl font-bold group-hover:text-white'>
          How to use Tailwind
        </h2>
      </div>
      <button className='btn btn-purple'>New Division</button>
    </div>
  );
}

export default App;
