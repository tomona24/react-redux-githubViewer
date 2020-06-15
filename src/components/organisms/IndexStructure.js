import styled from 'styled-components';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Table from '../molecules/Table';
import IssueHeader from '../molecules/IssueHeader';

const IndexStructure = (props) => {
  const { issues, addNewIssue, deleteChosenIssue, uploadEditIssue } = props;
  const [researchWord, setResearchWord] = useState('');
  const [checkedIssue, setCheckedIssue] = useState({});

  const setNewResearchWord = (word) => {
    const filterWord = word.toLowerCase();
    setResearchWord(filterWord);
  };

  const handleCheckIssue = (newIssue) => {
    const newCheckedIssue = {...checkedIssue};
    // debugger
    if (newCheckedIssue[newIssue.id]) {
      delete newCheckedIssue[newIssue.id];
    } else {
      newCheckedIssue[newIssue.id] = newIssue;
    }
    setCheckedIssue(newCheckedIssue);
  };

  const submitDeleteIssue = () => {
    // eslint-disable-next-line no-plusplus
    // for (let i = 0; i < deleteList.length; i++) {
    //   deleteChosenIssue(deleteList[i]);
    // }
    Object.keys(checkedIssue).map((id) => deleteChosenIssue(id));
  };

  const submitAddNewIssue = (newIssue) => {
    addNewIssue(newIssue);
  };

  return (
    <Container>
      <IssueHeader
        setNewResearchWord={setNewResearchWord}
        submitDeleteIssue={submitDeleteIssue}
        submitAddNewIssue={submitAddNewIssue}
      />
      <Table
        issues={issues}
        checkedIssue={checkedIssue}
        researchWord={researchWord}
        handleCheckAll={setCheckedIssue}
        handleCheckIssue={handleCheckIssue}
        uploadEditIssue={uploadEditIssue}
      />
    </Container>
  );
};

const Container = styled.div`
  max-width: 896px;
  margin: 0 auto;
`;

IndexStructure.propTypes = {
  issues: PropTypes.arrayOf().isRequired,
  addNewIssue: PropTypes.func.isRequired,
  deleteChosenIssue: PropTypes.func.isRequired,
  uploadEditIssue: PropTypes.func.isRequired,
};

export default IndexStructure;
