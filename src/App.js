import './App.css';
// import LessonFormBuilder from './components/LessonFormBuilder';
import MyLesson from './components/MyLesson';
// import Lessons from './components/Lessons';
import HorizontalSteps from './layout/HorizontalSteps';

function App() {
  return (
    <div className='w-screen h-screen'>
      {/* <LessonFormBuilder /> */}
      <MyLesson />
      {/* <Lessons /> */}
      <HorizontalSteps />
    </div>
  );
}

export default App;
