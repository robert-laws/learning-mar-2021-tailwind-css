import React from 'react';

const Lesson = ({ lesson }) => {
  return (
    <>
      {lesson ? (
        <div className='container mx-auto px-4'>
          <h1 className='text-3xl'>Review Lesson</h1>
          <div className='mt-8 grid grid-cols-5 gap-6 items-start'>
            <div className='grid grid-cols-1 gap-6'>
              <h3 className='text-xl'>Course Code</h3>
            </div>
            <div className='grid grid-cols-1 col-span-4 gap-6'>
              <p>{lesson.acf.course_code}</p>
            </div>
          </div>
          <div className='mt-8 grid grid-cols-5 gap-6 items-start'>
            <div className='grid grid-cols-1 gap-6'>
              <h3 className='text-xl'>Course Name</h3>
            </div>
            <div className='grid grid-cols-1 col-span-4 gap-6'>
              <p>{lesson.acf.course_title}</p>
            </div>
          </div>
          <div className='mt-8 grid grid-cols-5 gap-6 items-start'>
            <div className='grid grid-cols-1 gap-6'>
              <h3 className='text-xl'>Faculty</h3>
            </div>
            <div className='grid grid-cols-1 col-span-4 gap-6'>
              <p>
                {lesson.acf.faculty_first_name} {lesson.acf.faculty_last_name}
              </p>
            </div>
          </div>
          <div className='mt-8 grid grid-cols-5 gap-6 items-start'>
            <div className='grid grid-cols-1 gap-6'>
              <h3 className='text-xl'>Semester and Year</h3>
            </div>
            <div className='grid grid-cols-1 col-span-4 gap-6'>
              <p>
                {lesson.acf.semester} {lesson.acf.year}
              </p>
            </div>
          </div>
          <div className='mt-8 grid grid-cols-5 gap-6 items-start'>
            <div className='grid grid-cols-1 gap-6'>
              <h3 className='text-xl'>Number of Students</h3>
            </div>
            <div className='grid grid-cols-1 col-span-4 gap-6'>
              <p>{lesson.acf.number_of_learners}</p>
            </div>
          </div>
          <div className='mt-8 grid grid-cols-5 gap-6 items-start'>
            <div className='grid grid-cols-1 gap-6'>
              <h3 className='text-xl'>Lesson Duration</h3>
            </div>
            <div className='grid grid-cols-1 col-span-4 gap-6'>
              <p>{lesson.acf.duration_of_session}</p>
            </div>
          </div>
          <div className='mt-8 grid grid-cols-5 gap-6 items-start'>
            <div className='grid grid-cols-1 gap-6'>
              <h3 className='text-xl'>Session Date</h3>
            </div>
            <div className='grid grid-cols-1 col-span-4 gap-6'>
              <p>{lesson.acf.session_date}</p>
            </div>
          </div>
          <div className='mt-8 grid grid-cols-5 gap-6 items-start'>
            <div className='grid grid-cols-1 gap-6'>
              <h3 className='text-xl'>Target Assignment</h3>
            </div>
            <div className='grid grid-cols-1 col-span-4 gap-6'>
              <p>{lesson.acf.class_assignment}</p>
            </div>
          </div>
          <div className='mt-8 grid grid-cols-5 gap-6 items-start'>
            <div className='grid grid-cols-1 gap-6'>
              <h3 className='text-xl'>Librarian</h3>
            </div>
            <div className='grid grid-cols-1 col-span-4 gap-6'>
              {/* <p>{getLibrarianName(lesson.librarians)}</p> */}
              <p>{lesson.librarians}</p>
            </div>
          </div>
          <div className='mt-8 grid grid-cols-5 gap-6 items-start'>
            <div className='grid grid-cols-1 gap-6'>
              <h3 className='text-xl'>Co-Instructor</h3>
            </div>
            <div className='grid grid-cols-1 col-span-4 gap-6'>
              <p>{lesson.acf.co_instructor}</p>
            </div>
          </div>
          <div className='mt-8 grid grid-cols-5 gap-6 items-start'>
            <div className='grid grid-cols-1 gap-6'>
              <h3 className='text-xl'>Learning Outcomes</h3>
            </div>
            <div className='grid grid-cols-1 col-span-4 gap-6'>
              {lesson.acf.hasOwnProperty('learning_outcomes') ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: lesson.acf.learning_outcomes,
                  }}
                />
              ) : (
                <div>no information...</div>
              )}
            </div>
          </div>
          <div className='mt-8 grid grid-cols-5 gap-6 items-start'>
            <div className='grid grid-cols-1 gap-6'>
              <h3 className='text-xl'>Resources</h3>
            </div>
            <div className='grid grid-cols-1 col-span-4 gap-6'>
              {lesson.acf.hasOwnProperty('resources') ? (
                <div
                  dangerouslySetInnerHTML={{ __html: lesson.acf.resources }}
                />
              ) : (
                <div>no information...</div>
              )}
            </div>
          </div>

          <div className='mt-8 grid grid-cols-5 gap-6 items-start'>
            <div className='grid grid-cols-1 gap-6'>
              <h3 className='text-xl'>Information Literacy Objectives</h3>
            </div>
            <div className='grid grid-cols-1 col-span-4 gap-6'>
              <ul>
                {/* {lesson.information_literacy_objectives &&
                getInfoLitObjectsNames(
                  lesson.information_literacy_objectives
                ).map((objective) => <li key={objective}>{objective}</li>)} */}
              </ul>
            </div>
          </div>

          <div className='mt-8 grid grid-cols-5 gap-6 items-start'>
            <div className='grid grid-cols-1 gap-6'>
              <h3 className='text-xl'>Threshold Concepts</h3>
            </div>
            <div className='grid grid-cols-1 col-span-4 gap-6'>
              <ul>
                {/* {lesson.threshold_concepts &&
                getThresholdConceptNames(
                  lesson.threshold_concepts
                ).map((concept) => <li key={concept}>{concept}</li>)} */}
              </ul>
            </div>
          </div>

          <div className='mt-8 grid grid-cols-5 gap-6 items-start'>
            <div className='grid grid-cols-1 gap-6'>
              <h3 className='text-xl'>Modules Details</h3>
            </div>
            <div className='grid grid-cols-1 col-span-4 gap-6'>
              {lesson.acf.hasOwnProperty('modules_details') ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: lesson.acf.modules_details,
                  }}
                />
              ) : (
                <div>no information...</div>
              )}
            </div>
          </div>

          <div className='mt-8 mb-8 grid grid-cols-1 gap-6 items-start'>
            <div className='grid grid-cols-1 col-span-1 gap-6'>
              {/* <button
              type='button'
              onClick={handleSentToRestApi}
              className='w-full flex items-center justify-center px-8 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-3 md:text-lg md:px-10'
            >
              Save Lesson
            </button> */}
            </div>
          </div>
        </div>
      ) : (
        <div>...</div>
      )}
    </>
  );
};

export default Lesson;
