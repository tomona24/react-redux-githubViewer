import { connect } from 'react-redux';
import { addIssue, deleteIssue } from '../actions';
import IndexStructure from '../components/organisms/IndexStructure';

const mapStateToProps = (state) => {
  return {
    issues: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewIssue: (issue) => {
      dispatch(addIssue(issue));
    },
    deleteChosenIssue: (issue) => {
      dispatch(deleteIssue(issue));
    },
  };
};

const IssueContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexStructure);

export default IssueContainer;
