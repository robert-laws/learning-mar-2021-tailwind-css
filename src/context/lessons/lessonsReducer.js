import { BUILD_LESSON, GET_LESSONS } from '../types';

const lessonsReducer = (state, action) => {
  switch (action.type) {
    case BUILD_LESSON: {
      return {
        ...state,
        lesson: {
          ...state.lesson,
          [action.payload.inputName]: action.payload.value,
        },
        isLoadingLesson: false,
      };
    }

    case GET_LESSONS: {
      return {
        ...state,
        lessons: action.payload,
        isLoadingLesson: false,
      };
    }

    default:
      return state;
  }
};

export default lessonsReducer;
