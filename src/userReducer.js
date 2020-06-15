import { ADD_ISSUE, DELETE_ISSUE, EDIT_ISSUE } from './actions';

const user1 = {
  id: 'ore-gorira',
  title: 'ore',
  detail: 'meshi kuu',
  status: 'banana',
  author: 'umai',
  createdDate: 'gorira',
  updatedDate: 'gorira',
};

const initialIssues = [user1];

const userReducer = (state = initialIssues, action) => {
  switch (action.type) {
    case ADD_ISSUE:
      return [...state, action.issue];
    case DELETE_ISSUE:
      return state.filter((issue) => issue.id !== action.id);
    case EDIT_ISSUE:
      return state.map((issue) =>
        issue.id === action.issue.id ? action.issue : issue
      );
    default:
      return state;
  }
};

export default userReducer;
