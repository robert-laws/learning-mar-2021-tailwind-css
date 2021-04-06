import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/tailwind.css';
import App from './App';
import CoursesState from './context/courses/CoursesState';
import LessonsState from './context/lessons/LessonsState';

ReactDOM.render(
  <React.StrictMode>
    <CoursesState>
      <LessonsState>
        <App />
      </LessonsState>
    </CoursesState>
  </React.StrictMode>,
  document.getElementById('root')
);
