import { ADD_ISSUE, DELETE_ISSUE, EDIT_ISSUE } from './actions';

const kariData = {
  id: 'ore-gorira',
  title: 'ore',
  detail: 'meshi kuu',
  status: 'banana',
  author: 'umai',
  createdDate: 'gorira',
  updatedDate: 'gorira',
};

const kariData2 = {
  id: 'are-gorira',
  title: 'are',
  detail: 'meshi kuu',
  status: 'banana',
  author: 'umai',
  createdDate: 'gorira',
  updatedDate: 'gorira',
};

const kariData3 = {
  id: 'ure-gorira',
  title: 'ure',
  detail: 'meshi kuu',
  status: 'banana',
  author: 'umai',
  createdDate: 'gorira',
  updatedDate: 'gorira',
};

const initialIssues = [kariData, kariData2, kariData3];

const issueReducer = (state = initialIssues, action) => {
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

export default issueReducer;
