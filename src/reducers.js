import { ADD_ISSUE, DELETE_ISSUE } from './actions';

const kariData = {
  title: 'ore',
  detail: 'meshi kuu',
  status: 'banana',
  author: 'umai',
  createdDate: 'gorira',
  updatedDate: 'gorira',
};

const kariData2 = {
  title: 'are',
  detail: 'meshi kuu',
  status: 'banana',
  author: 'umai',
  createdDate: 'gorira',
  updatedDate: 'gorira',
};

const kariData3 = {
  title: 'ure',
  detail: 'meshi kuu',
  status: 'banana',
  author: 'umai',
  createdDate: 'gorira',
  updatedDate: 'gorira',
};

const issues = [kariData, kariData2, kariData3];

const issueReducer = (state = issues, action) => {
  switch (action.type) {
    case ADD_ISSUE:
      return [
        ...state,
        {
          title: 'ure',
          detail: 'meshi kuu',
          status: 'banana',
          author: 'umai',
          createdDate: 'gorira',
          updatedDate: 'gorira',
        },
      ];
    // case ADD_ISSUE:
    //   return {
    //     ...state,
    //     issues: [
    //       ...state.issues,
    //       // {
    //       //   title: action.title,
    //       //   detail: action.detail,
    //       //   status: action.status,
    //       //   author: action.author,
    //       //   createdDate: '',
    //       //   updatedDate: '',
    //       // }
    //       action.issue,
    //     ],
    //   };
    case DELETE_ISSUE:
      return state.filter((issue) => issue !== action.issue);
    default:
      return state;
  }
};

export default issueReducer;
