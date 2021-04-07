import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/tailwind.css';
import App from './App';
import CoursesState from './context/courses/CoursesState';
import LessonsState from './context/lessons/LessonsState';
import OptionsState from './context/options/OptionsState';

ReactDOM.render(
  <React.StrictMode>
    <CoursesState>
      <LessonsState>
        <OptionsState>
          <App />
        </OptionsState>
      </LessonsState>
    </CoursesState>
  </React.StrictMode>,
  document.getElementById('root')
);
