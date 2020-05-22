import { SET_VISIBLE_FILTER, ADD_ISSUE, DELETE_ISSUE } from './actions';

const issueReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ISSUE:
      return {
        ...state,
        issues: [
          ...state.issues,
          // {
          //   title: action.title,
          //   detail: action.detail,
          //   status: action.status,
          //   author: action.author,
          //   createdDate: '',
          //   updatedDate: '',
          // }
          action.issue,
        ],
      };
    case DELETE_ISSUE:
      return {
        issues: state.isseus.filter((issue) => issue !== action.issue),
      };
    case SET_VISIBLE_FILTER:
      return {
        ...state,
        visibleFilter: [
          state.issues.filter(
            (issue) => issue.title.indexOf(action.word) !== -1
          ),
        ],
      };
    default:
      return state;
  }
};

export default issueReducer;
