import React, { useState, useCallback, useContext, useEffect } from 'react';
import Select from './Select';
import StaticTextInput from './StaticTextInput';
import DatePicker from './DatePicker';
import NumberPicker from './NumberPicker';
import RadioButtonList from './RadioButtonList';
import TextInput from './TextInput';
import CheckBoxList from './CheckBoxList';
import CoursesContext from '../context/courses/coursesContext';
import LessonsContext from '../context/lessons/lessonsContext';
import OptionsContext from '../context/options/optionsContext';
import { setIntervals } from '../utils/formUtils';

const LessonFormBuilder = () => {
  const coursesContext = useContext(CoursesContext);
  const { getCourses, getCourse, courses, course, isLoading } = coursesContext;

  const lessonsContext = useContext(LessonsContext);
  const { lesson, buildLesson } = lessonsContext;

  const optionsContext = useContext(OptionsContext);
  const {
    informationLiteracyObjectives,
    thresholdConcepts,
    modules,
    librarians,
    getInformationLiteracyObjectives,
    getThresholdConcepts,
    getModules,
    getLibrarians,
  } = optionsContext;

  const [courseSelect, setCourseSelect] = useState({
    name: '',
    id: '',
  });

  const [durations, setDurations] = useState(null);

  useEffect(() => {
    getCourses();
    getInformationLiteracyObjectives();
    getThresholdConcepts();
    getModules();
    getLibrarians();
  }, [
    getCourses,
    getInformationLiteracyObjectives,
    getThresholdConcepts,
    getModules,
    getLibrarians,
  ]);

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
      {isLoading ? (
        <div>Loading</div>
      ) : (
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

          {/* Number of Learners */}
          <NumberPicker
            inputName='number_of_learners'
            onInput={inputHandler}
            initialValue={''}
          />

          {librarians && (
            <RadioButtonList
              listName='librarians'
              items={librarians}
              onInput={inputHandler}
              checkedList={[]}
            />
          )}

          {/* Class Assignment */}
          <TextInput
            inputName={'class_assignment'}
            onInput={inputHandler}
            initialValue={''}
          />
          <hr className='mt-8 mb-4' />

          {informationLiteracyObjectives && (
            <CheckBoxList
              listName={'information_literacy_objectives'}
              items={informationLiteracyObjectives}
              onInput={inputHandler}
              checkedList={[]}
            />
          )}
          <hr className='mt-8 mb-4' />

          {thresholdConcepts && (
            <CheckBoxList
              listName={'threshold_concepts'}
              items={thresholdConcepts}
              onInput={inputHandler}
              checkedList={[]}
            />
          )}
          <hr className='mt-8 mb-4' />

          {modules && (
            <CheckBoxList
              listName={'modules'}
              items={modules}
              onInput={inputHandler}
              checkedList={[]}
            />
          )}
          <hr className='mt-8 mb-4' />
        </form>
      )}
    </div>
  );
};

export default LessonFormBuilder;
