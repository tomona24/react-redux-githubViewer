// action types
export const SET_VISIBLE_FILTER = 'SET_FILTER';
export const ADD_ISSUE = 'ADD_ISSUE';
export const DELETE_ISSUE = 'DELETE_ISSUE';

// action creators
export const addIssue = (issue) => {
  return {
    type: ADD_ISSUE,
    issue,
  };
};

export const deleteIssue = (issue) => {
  return {
    type: DELETE_ISSUE,
    issue,
  };
};

export const setVisibleFilter = (word) => {
  return {
    type: SET_VISIBLE_FILTER,
    word,
  };
};
