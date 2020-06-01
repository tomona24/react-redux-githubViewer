import styled from 'styled-components';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TabIndices from '../molecules/TabIndices';
import Table from '../molecules/Table';
import IssueHeader from '../molecules/IssueHeader';

const IndexStructure = (props) => {
  const [researchWord, setResearchWord] = useState('');
  const [deleteList, setDeleteList] = useState([]);
  const { issues, addNewIssue, deleteChosenIssue } = props;

  const setNewResearchWord = (word) => {
    const filterWord = word.toLowerCase();
    setResearchWord(filterWord);
  };

  const deleteIssue = () => {
    for (deleteIssue in deleteList) {
      deleteChosenIssue(deleteIssue);
    }
  };

  const changeDeleteList = (newIssue, isClicked) => {
    if (isClicked) {
      const newDeleteIssues = [...deleteList, newIssue];
      setDeleteList(newDeleteIssues);
    } else {
      const filteredDeleteIssues = deleteList.filter((issue) => {
        return newIssue !== issue;
      });
      setDeleteList(filteredDeleteIssues);
    }
  };

  return (
    <Container>
      <TabIndices />
      <IssueHeader
        setNewResearchWord={setNewResearchWord}
        deleteIssue={deleteIssue}
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
};

export default IndexStructure;
