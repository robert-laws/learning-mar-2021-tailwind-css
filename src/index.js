import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/tailwind.css';
import App from './App';
import CoursesState from './context/courses/CoursesState';

ReactDOM.render(
  <React.StrictMode>
    <CoursesState>
      <App />
    </CoursesState>
  </React.StrictMode>,
  document.getElementById('root')
);
