import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import LessonFormBuilder from './LessonFormBuilder';
import ModulesBuilder from './ModulesBuilder';
import ReviewLesson from './ReviewLesson';

const MyLesson = () => {
  const [formStep, setFormStep] = useState(1);

  const updateStep = (stepValue) => {
    setFormStep(stepValue);
  };

  const barPercent = (formStep / 3) * 100;

  return (
    <>
      <h1 className='text-2xl text-blue-800'>Build a New Lesson</h1>
      <hr className='mt-8 mb-4' />
      <div className='pt-1 mx-8'>
        <progress id='file' max='100' value={barPercent}></progress>
      </div>
      {formStep === 1 && <LessonFormBuilder handleUpdateStep={updateStep} />}
      {formStep === 2 && (
        <DndProvider backend={HTML5Backend}>
          <ModulesBuilder handleUpdateStep={updateStep} />
        </DndProvider>
      )}
      {formStep === 3 && <ReviewLesson handleUpdateStep={updateStep} />}
    </>
  );
};

export default MyLesson;
