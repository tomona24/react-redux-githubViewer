import { connect } from 'react-redux';
import IssueList from '../components/molecules/Table'


const getVisibleList = (issues, word) => {
    return issues.filter(issue => issue.title.indexOf(word) >= 0)
}

const mapStateToProps => state => {
    return {
        issues: getVisibleList(state.issues, "a")
    }
}


const VisibleIssueList = connect(
    mapStateToProps,
    null
)(IssueList)

export default VisibleIssueList;