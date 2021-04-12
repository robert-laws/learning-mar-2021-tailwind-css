import React, { useContext, useEffect } from 'react';
import LessonsContext from '../context/lessons/lessonsContext';
import OptionsContext from '../context/options/optionsContext';
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

  const optionsContext = useContext(OptionsContext);
  const {
    informationLiteracyObjectives,
    thresholdConcepts,
    librarians,
    getInformationLiteracyObjectives,
    getThresholdConcepts,
    getLibrarians,
  } = optionsContext;

  useEffect(() => {
    getLessons();
    getInformationLiteracyObjectives();
    getThresholdConcepts();
    getLibrarians();
  }, [
    getLessons,
    getInformationLiteracyObjectives,
    getThresholdConcepts,
    getLibrarians,
  ]);

  return (
    <div>
      <h1 className='text-xl'>Lessons</h1>
      <LessonsList
        lessons={lessons}
        isLoadingLesson={isLoadingLesson}
        getLesson={getLesson}
      />
      <hr />
      <Lesson
        lesson={lesson}
        informationLiteracyObjectives={informationLiteracyObjectives}
        thresholdConcepts={thresholdConcepts}
        librarians={librarians}
      />
    </div>
  );
};

export default Lessons;
