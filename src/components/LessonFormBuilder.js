import React, { useState, useCallback, useContext, useEffect } from 'react';
import Select from './Select';
import StaticTextInput from './StaticTextInput';
import DatePicker from './DatePicker';
import NumberPicker from './NumberPicker';
import RadioButtonList from './RadioButtonList';
import TextAreaInput from './TextAreaInput';
import CheckBoxList from './CheckBoxList';
import TextInputCollection from './TextInputCollection';
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
    librarians,
    getInformationLiteracyObjectives,
    getThresholdConcepts,
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
    getLibrarians();
  }, [
    getCourses,
    getInformationLiteracyObjectives,
    getThresholdConcepts,
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
      <h1 className='text-3xl'>Lesson Form</h1>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <Select
            optionList={courses}
            onSelect={onSelect}
            name='courses'
            initialText={'Select a course to load details'}
          />

          <hr className='mt-8 mb-4' />
          <div className='mt-8 grid grid-cols-1 md:grid-cols-1 gap-6 items-start'>
            <div className='grid grid-cols-1 gap-6'>
              <h2 className='text-2xl'>Course Details</h2>
            </div>
          </div>
          <div className='mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-start'>
            <div className='grid grid-cols-1 gap-6'>
              <StaticTextInput
                inputName={'course_code'}
                onInput={inputHandler}
                initialValue={''}
                updateValue={course.title?.rendered || ''}
                visible={true}
              />
            </div>
            <div className='grid grid-cols-1 gap-6'>
              <StaticTextInput
                inputName={'course_name'}
                onInput={inputHandler}
                initialValue={''}
                updateValue={course.acf?.course_name || ''}
                visible={true}
              />
            </div>
            <div className='grid grid-cols-1 gap-6'>
              <StaticTextInput
                inputName={'faculty'}
                onInput={inputHandler}
                initialValue={''}
                updateValue={course.acf?.faculty || ''}
                visible={true}
              />
            </div>
            <div className='grid grid-cols-1 gap-6'>
              <StaticTextInput
                inputName={'semester'}
                onInput={inputHandler}
                initialValue={''}
                updateValue={course.acf?.semester || ''}
                visible={true}
              />
            </div>
            <div className='grid grid-cols-1 gap-6'>
              <StaticTextInput
                inputName={'year'}
                onInput={inputHandler}
                initialValue={''}
                updateValue={course.acf?.year || ''}
                visible={true}
              />
            </div>
          </div>
          <hr className='mt-8 mb-4' />
          <div className='mt-8 grid grid-cols-1 md:grid-cols-1 gap-6 items-start'>
            <div className='grid grid-cols-1 gap-6'>
              <h2 className='text-2xl'>Session Details</h2>
            </div>
          </div>
          <div className='mt-8 grid grid-cols-1 md:grid-cols-6 gap-6 items-start'>
            <div className='grid grid-cols-1 gap-6'>
              {/* Class Date */}
              <DatePicker inputName='session_date' onInput={inputHandler} />
            </div>
            <div className='grid grid-cols-1 gap-6'>
              {/* Class Duration */}
              {durations && (
                <Select
                  optionList={durations}
                  onSelect={inputHandler}
                  name='duration'
                  initialText={'Select a session length'}
                />
              )}
            </div>
            <div className='grid grid-cols-1 gap-6'>
              {/* Number of Learners */}
              <NumberPicker
                inputName='number_of_learners'
                onInput={inputHandler}
                initialValue={''}
                placeholder={'# Students'}
              />
            </div>
            <div className='grid grid-cols-1 gap-6'>
              {/* Librarians */}
              {librarians && (
                <RadioButtonList
                  listName='librarians'
                  items={librarians}
                  onInput={inputHandler}
                  checkedList={[]}
                />
              )}
            </div>
            <div className='grid grid-cols-1 col-span-2 gap-6'>
              {/* Class Assignment */}
              <TextAreaInput
                inputName={'class_assignment'}
                onInput={inputHandler}
                placeholder={
                  'Describe the main assignment which the information literacy session will address.'
                }
                initialValue={''}
              />
            </div>
          </div>

          <hr className='mt-8 mb-4' />

          <div className='mt-8 grid grid-cols-1 md:grid-cols-1 gap-6 items-start'>
            <div className='grid grid-cols-1 gap-6'>
              <h2 className='text-2xl'>
                Information Literacy Objectives & Threshold Concepts
              </h2>
            </div>
          </div>

          <div className='mt-8 grid grid-cols-1 md:grid-cols-4 gap-6 items-start'>
            <div className='grid grid-cols-1 lg:col-span-2 md:col-span-2 sm:col-span-4 col-span-4 gap-6'>
              {informationLiteracyObjectives && (
                <CheckBoxList
                  listName={'information_literacy_objectives'}
                  items={informationLiteracyObjectives}
                  onInput={inputHandler}
                  checkedList={[]}
                />
              )}
            </div>
            <div className='grid grid-cols-1 lg:col-span-2 md:col-span-2 sm:col-span-4 col-span-4 gap-6'>
              {thresholdConcepts && (
                <CheckBoxList
                  listName={'threshold_concepts'}
                  items={thresholdConcepts}
                  onInput={inputHandler}
                  checkedList={[]}
                />
              )}
            </div>
          </div>

          <hr className='mt-8 mb-4' />
          <div className='mt-8 grid grid-cols-1 md:grid-cols-1 gap-6 items-start'>
            <div className='grid grid-cols-1 gap-6'>
              <h2 className='text-2xl'>Learning Outcomes</h2>
            </div>
          </div>

          <div className='mt-8 grid grid-cols-1 gap-6 items-start'>
            <div className='grid grid-cols-1 gap-6'>
              {/* Learning Outcomes */}
              <TextInputCollection
                listName='learning_outcomes'
                onInput={inputHandler}
                placeholder={'Learning Outcome'}
              />
            </div>
          </div>

          <hr className='mt-8 mb-4' />

          <button
            type='submit'
            className='w-full flex items-center justify-center px-8 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-3 md:text-lg md:px-10'
          >
            Next Step - Add Modules
          </button>
        </form>
      )}
    </div>
  );
};

export default LessonFormBuilder;
