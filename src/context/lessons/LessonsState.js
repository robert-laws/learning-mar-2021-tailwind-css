import React, { useReducer, useCallback } from 'react';
import { BUILD_LESSON, GET_LESSONS } from '../types';
import LessonsContext from './lessonsContext';
import lessonsReducer from './lessonsReducer';

const LessonsState = ({ children }) => {
  const initialState = {
    lesson: {},
    lessons: null,
    isLoadingLesson: true,
  };

  const [state, dispatch] = useReducer(lessonsReducer, initialState);

  const restRoot =
    'https://headless-rest.guqlibrary.georgetown.domains/wp-json';

  const getLessons = useCallback(async () => {
    let restURL = `${restRoot}/wp/v2/lessons?_fields=id,title,acf,information_literacy_objectives,threshold_concepts,librarians&order=desc`;

    try {
      const response = await fetch(restURL);
      const allLessons = await response.json();

      if (allLessons) {
        dispatch({ type: GET_LESSONS, payload: allLessons });
      }
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  const buildLesson = useCallback(
    (inputName, value) => {
      dispatch({ type: BUILD_LESSON, payload: { inputName, value } });
    },
    [dispatch]
  );

  return (
    <LessonsContext.Provider
      value={{
        lesson: state.lesson,
        lessons: state.lessons,
        isLoadingLesson: state.isLoadingLesson,
        getLessons,
        buildLesson,
      }}
    >
      {children}
    </LessonsContext.Provider>
  );
};

export default LessonsState;
