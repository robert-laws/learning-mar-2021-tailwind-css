import React, { useContext, useEffect } from 'react';
import LessonsContext from '../context/lessons/lessonsContext';
import LessonsList from './LessonsList';
import Lesson from './Lesson';

const Lessons = () => {
  const lessonsContext = useContext(LessonsContext);
  const {
    lesson,
    lessons,
    getLessons,
    getLesson,
    isLoadingLesson,
  } = lessonsContext;

  useEffect(() => {
    getLessons();
  }, [getLessons]);

  return (
    <div>
      <h1 className='text-xl'>Lessons</h1>
      <LessonsList
        lessons={lessons}
        isLoadingLesson={isLoadingLesson}
        getLesson={getLesson}
      />
      <hr />
      <Lesson lesson={lesson} />
    </div>
  );
};

export default Lessons;
