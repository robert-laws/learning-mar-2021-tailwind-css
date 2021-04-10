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

  return (
    <>
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
