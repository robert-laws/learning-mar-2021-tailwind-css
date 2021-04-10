import './App.css';
// import LessonFormBuilder from './components/LessonFormBuilder';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ModulesBuilder from './components/ModulesBuilder';

function App() {
  return (
    <div className='w-screen h-screen'>
      {/* <LessonFormBuilder /> */}
      <DndProvider backend={HTML5Backend}>
        <ModulesBuilder />
      </DndProvider>
    </div>
  );
}

export default App;
