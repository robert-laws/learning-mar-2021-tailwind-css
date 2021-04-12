import React, { useContext, useEffect } from 'react';
import LessonsContext from '../context/lessons/lessonsContext';

const LessonsList = () => {
  const lessonsContext = useContext(LessonsContext);
  const { lessons, getLessons, isLoadingLesson } = lessonsContext;

  useEffect(() => {
    getLessons();
  }, [getLessons]);

  return (
    <>
      {isLoadingLesson ? (
        <div>loading...</div>
      ) : (
        <ul>
          {lessons &&
            lessons.map((lesson) => (
              <li key={lesson.id}>
                <a
                  href={lesson.id}
                  dangerouslySetInnerHTML={{ __html: lesson.title.rendered }}
                />
              </li>
            ))}
        </ul>
      )}
    </>
  );
};

export default LessonsList;
