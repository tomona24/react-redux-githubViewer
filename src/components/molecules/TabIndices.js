import styled from 'styled-components';
import React, { useState } from 'react';
import TabIndex from '../atoms/TabIndex';

const TabIndices = () => {
  const [isIssue, changeIsIssue] = useState(true);
  return (
    <Div>
      <TabIndex text="Issue" to="/issue" selected />
      <TabIndex text="Pull Request" selected={false} to="/pullRequest" />
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  justify-content: center;
  width: 1000px;
  margin: 16px auto;
`;

export default TabIndices;
