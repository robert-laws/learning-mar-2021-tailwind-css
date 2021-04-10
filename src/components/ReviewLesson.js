import React, { useContext } from 'react';
import LessonsContext from '../context/lessons/lessonsContext';

const ReviewLesson = ({ handleUpdateStep }) => {
  const lessonsContext = useContext(LessonsContext);
  const { lesson } = lessonsContext;

  console.log(lesson);

  return <div>Review Lesson...</div>;
};

export default ReviewLesson;
