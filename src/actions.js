// action types
export const ADD_ISSUE = 'ADD_ISSUE';
export const DELETE_ISSUE = 'DELETE_ISSUE';
export const EDIT_ISSUE = 'EDIT_ISSUE';

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

export const editIssue = (issue) => {
  return {
    type: EDIT_ISSUE,
    issue,
  };
};
