import React, { useContext } from 'react';
import LessonsContext from '../context/lessons/lessonsContext';
import OptionsContext from '../context/options/optionsContext';

const ReviewLesson = ({ handleUpdateStep }) => {
  const lessonsContext = useContext(LessonsContext);
  const { lesson } = lessonsContext;

  const optionsContext = useContext(OptionsContext);
  const {
    informationLiteracyObjectives,
    thresholdConcepts,
    librarians,
  } = optionsContext;

  const getLibrarianName = (libStaff) => {
    let librarianName = librarians.find(
      (librarian) => librarian.id === libStaff[0]
    );
    return librarianName.name;
  };

  const getInfoLitObjectsNames = (infoLitObjectives) => {
    let values = infoLitObjectives.map((objective) => {
      let item = informationLiteracyObjectives.find(
        (item) => item.id === objective
      );
      return item.name;
    });
    return values;
  };

  const getThresholdConceptNames = (thresConcepts) => {
    let values = thresConcepts.map((concept) => {
      let item = thresholdConcepts.find((item) => item.id === concept);
      return item.name;
    });
    return values;
  };

  console.log(lesson);

  return (
    <div className='container mx-auto px-4'>
      <h1 className='text-3xl'>Review Lesson</h1>
      <div className='mt-8 grid grid-cols-5 gap-6 items-start'>
        <div className='grid grid-cols-1 gap-6'>
          <h3 className='text-xl'>Course Code</h3>
        </div>
        <div className='grid grid-cols-1 col-span-4 gap-6'>
          <p>{lesson.course_code}</p>
        </div>
      </div>
      <div className='mt-8 grid grid-cols-5 gap-6 items-start'>
        <div className='grid grid-cols-1 gap-6'>
          <h3 className='text-xl'>Course Name</h3>
        </div>
        <div className='grid grid-cols-1 col-span-4 gap-6'>
          <p>{lesson.course_name}</p>
        </div>
      </div>
      <div className='mt-8 grid grid-cols-5 gap-6 items-start'>
        <div className='grid grid-cols-1 gap-6'>
          <h3 className='text-xl'>Faculty</h3>
        </div>
        <div className='grid grid-cols-1 col-span-4 gap-6'>
          <p>{lesson.faculty}</p>
        </div>
      </div>
      <div className='mt-8 grid grid-cols-5 gap-6 items-start'>
        <div className='grid grid-cols-1 gap-6'>
          <h3 className='text-xl'>Semester and Year</h3>
        </div>
        <div className='grid grid-cols-1 col-span-4 gap-6'>
          <p>
            {lesson.semester} {lesson.year}
          </p>
        </div>
      </div>
      <div className='mt-8 grid grid-cols-5 gap-6 items-start'>
        <div className='grid grid-cols-1 gap-6'>
          <h3 className='text-xl'>Number of Students</h3>
        </div>
        <div className='grid grid-cols-1 col-span-4 gap-6'>
          <p>{lesson.number_of_learners}</p>
        </div>
      </div>
      <div className='mt-8 grid grid-cols-5 gap-6 items-start'>
        <div className='grid grid-cols-1 gap-6'>
          <h3 className='text-xl'>Lesson Duration</h3>
        </div>
        <div className='grid grid-cols-1 col-span-4 gap-6'>
          <p>{lesson.duration}</p>
        </div>
      </div>
      <div className='mt-8 grid grid-cols-5 gap-6 items-start'>
        <div className='grid grid-cols-1 gap-6'>
          <h3 className='text-xl'>Session Date</h3>
        </div>
        <div className='grid grid-cols-1 col-span-4 gap-6'>
          <p>{lesson.session_date}</p>
        </div>
      </div>
      <div className='mt-8 grid grid-cols-5 gap-6 items-start'>
        <div className='grid grid-cols-1 gap-6'>
          <h3 className='text-xl'>Target Assignment</h3>
        </div>
        <div className='grid grid-cols-1 col-span-4 gap-6'>
          <p>{lesson.class_assignment}</p>
        </div>
      </div>
      <div className='mt-8 grid grid-cols-5 gap-6 items-start'>
        <div className='grid grid-cols-1 gap-6'>
          <h3 className='text-xl'>Librarian</h3>
        </div>
        <div className='grid grid-cols-1 col-span-4 gap-6'>
          <p>{getLibrarianName(lesson.librarians)}</p>
        </div>
      </div>
      <div className='mt-8 grid grid-cols-5 gap-6 items-start'>
        <div className='grid grid-cols-1 gap-6'>
          <h3 className='text-xl'>Learning Outcomes</h3>
        </div>
        <div className='grid grid-cols-1 col-span-4 gap-6'>
          <div dangerouslySetInnerHTML={{ __html: lesson.learning_outcomes }} />
        </div>
      </div>

      <div className='mt-8 grid grid-cols-5 gap-6 items-start'>
        <div className='grid grid-cols-1 gap-6'>
          <h3 className='text-xl'>Information Literacy Objectives</h3>
        </div>
        <div className='grid grid-cols-1 col-span-4 gap-6'>
          <ul>
            {lesson.information_literacy_objectives &&
              getInfoLitObjectsNames(
                lesson.information_literacy_objectives
              ).map((objective) => <li key={objective}>{objective}</li>)}
          </ul>
        </div>
      </div>

      <div className='mt-8 grid grid-cols-5 gap-6 items-start'>
        <div className='grid grid-cols-1 gap-6'>
          <h3 className='text-xl'>Threshold Concepts</h3>
        </div>
        <div className='grid grid-cols-1 col-span-4 gap-6'>
          <ul>
            {lesson.threshold_concepts &&
              getThresholdConceptNames(
                lesson.threshold_concepts
              ).map((concept) => <li key={concept}>{concept}</li>)}
          </ul>
        </div>
      </div>

      <div className='mt-8 grid grid-cols-5 gap-6 items-start'>
        <div className='grid grid-cols-1 gap-6'>
          <h3 className='text-xl'>Modules Details</h3>
        </div>
        <div className='grid grid-cols-1 col-span-4 gap-6'>
          <div dangerouslySetInnerHTML={{ __html: lesson.modules_details }} />
        </div>
      </div>
    </div>
  );
};

export default ReviewLesson;
