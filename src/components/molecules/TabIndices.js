import styled from 'styled-components';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TabIndex from '../atoms/TabIndex';

const TabIndices = (props) => {
  const [isIssue, setIsIssue] = useState(true);
  const { changeCurrent } = props;
  const changeSelected = () => {
    setIsIssue(!isIssue);
    if (!isIssue) {
      changeCurrent('IssueContainer');
    } else {
      changeCurrent('PullRequest');
    }
  };
  return (
    <Div>
      <TabIndex
        text="Issue"
        selected={isIssue}
        id="IssueContainer"
        changeSelected={changeSelected}
      />
      <TabIndex
        text="Pull Request"
        id="PullRequest"
        changeSelected={changeSelected}
        selected={!isIssue}
      />
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1000px;
  padding: 0px 16px;
  margin: 16px auto;
`;

TabIndices.propTypes = {
  changeCurrent: PropTypes.func.isRequired,
};

export default TabIndices;
