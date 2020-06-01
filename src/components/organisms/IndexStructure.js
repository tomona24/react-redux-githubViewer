import styled from 'styled-components';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TabIndices from '../molecules/TabIndices';
import Table from '../molecules/Table';
import IssueHeader from '../molecules/IssueHeader';

const IndexStructure = (props) => {
  const { issues, addNewIssue, deleteChosenIssue } = props;
  const [researchWord, setResearchWord] = useState('');
  const [deleteList, setDeleteList] = useState([]);

  const setNewResearchWord = (word) => {
    const filterWord = word.toLowerCase();
    setResearchWord(filterWord);
  };

  const submitDeleteIssue = () => {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < deleteList.length; i++) {
      deleteChosenIssue(deleteList[i]);
    }
  };

  const changeDeleteList = (newIssue, isClicked) => {
    let newDeleteIssues = [];
    if (isClicked) {
      newDeleteIssues = [...deleteList, newIssue];
    } else {
      newDeleteIssues = deleteList.filter((issue) => {
        return newIssue !== issue;
      });
    }
    setDeleteList(newDeleteIssues);
  };

  const submitAddNewIssue = () => {
    addNewIssue();
  };

  return (
    <Container>
      <TabIndices />
      <IssueHeader
        setNewResearchWord={setNewResearchWord}
        submitDeleteIssue={submitDeleteIssue}
        submitAddNewIssue={submitAddNewIssue} // あとで消す
      />
      <Table
        issues={issues}
        researchWord={researchWord}
        changeDeleteList={changeDeleteList}
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
};

export default IndexStructure;
