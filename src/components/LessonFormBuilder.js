import React, { useState, useCallback, useContext, useEffect } from 'react';
import Select from './Select';
import StaticTextInput from './StaticTextInput';
import CoursesContext from '../context/courses/coursesContext';
import LessonsContext from '../context/lessons/lessonsContext';

const LessonFormBuilder = () => {
  const coursesContext = useContext(CoursesContext);
  const { getCourses, getCourse, courses, course, isLoading } = coursesContext;

  const lessonsContext = useContext(LessonsContext);
  const { lesson, buildLesson } = lessonsContext;

  const [courseSelect, setCourseSelect] = useState({
    name: '',
    id: '',
  });

  useEffect(() => {
    getCourses();
  }, [getCourses]);

  useEffect(() => {
    if (courseSelect.id !== '') {
      getCourse(courseSelect.id);
    }
  }, [getCourse, courseSelect]);

  const inputHandler = useCallback(
    (inputName, value) => {
      buildLesson(inputName, value);
    },
    [buildLesson]
  );

  const onSelect = useCallback(
    (name, id) => {
      setCourseSelect({ name, id });
    },
    [setCourseSelect]
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(lesson);
  };

  return (
    <div className='container mx-auto px-4'>
      <h1 className='text-2xl'>Lesson Form</h1>
      <form onSubmit={handleSubmit}>
        <Select
          optionList={courses}
          onSelect={onSelect}
          name='courses'
          initialText={'Select a Course'}
        />

        <StaticTextInput
          inputName={'course_code'}
          onInput={inputHandler}
          initialValue={''}
          updateValue={course.title?.rendered || ''}
          visible={true}
        />
        <StaticTextInput
          inputName={'course_name'}
          onInput={inputHandler}
          initialValue={''}
          updateValue={course.acf?.course_name || ''}
          visible={true}
        />
        <StaticTextInput
          inputName={'faculty'}
          onInput={inputHandler}
          initialValue={''}
          updateValue={course.acf?.faculty || ''}
          visible={true}
        />
        <StaticTextInput
          inputName={'semester'}
          onInput={inputHandler}
          initialValue={''}
          updateValue={course.acf?.semester || ''}
          visible={true}
        />
        <StaticTextInput
          inputName={'year'}
          onInput={inputHandler}
          initialValue={''}
          updateValue={course.acf?.year || ''}
          visible={true}
        />
      </form>
    </div>
  );
};

export default LessonFormBuilder;
