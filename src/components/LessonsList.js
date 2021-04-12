import React from 'react';

const LessonsList = ({ lessons, isLoadingLesson, getLesson }) => {
  const handleClick = (event) => {
    const lessonId = event.target.id;
    getLesson(lessonId);
  };

  return (
    <>
      {isLoadingLesson ? (
        <div>loading...</div>
      ) : (
        <ul>
          {lessons &&
            lessons.map((lesson) => (
              <li key={lesson.id}>
                <button
                  id={lesson.id}
                  onClick={handleClick}
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
