import React, { useState, useCallback, useContext, useEffect } from 'react';
import Select from './Select';
import StaticTextInput from './StaticTextInput';
import DatePicker from './DatePicker';
import CoursesContext from '../context/courses/coursesContext';
import LessonsContext from '../context/lessons/lessonsContext';
import { setIntervals } from '../utils/formUtils';

const LessonFormBuilder = () => {
  const coursesContext = useContext(CoursesContext);
  const { getCourses, getCourse, courses, course, isLoading } = coursesContext;

  const lessonsContext = useContext(LessonsContext);
  const { lesson, buildLesson } = lessonsContext;

  const [courseSelect, setCourseSelect] = useState({
    name: '',
    id: '',
  });

  const [durations, setDurations] = useState(null);

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

  useEffect(() => {
    const myDurations = setIntervals(5, 75, 5);
    setDurations(myDurations);
  }, []);

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

        <hr className='mt-8 mb-4' />

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

        {/* Class Date */}
        <DatePicker inputName='session_date' onInput={inputHandler} />

        {/* Class Duration */}
        {durations && (
          <Select
            optionList={durations}
            onSelect={inputHandler}
            name='duration'
            initialText={'Select a session length'}
          />
        )}
      </form>
    </div>
  );
};

export default LessonFormBuilder;
