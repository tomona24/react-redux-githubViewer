import styled from 'styled-components';
import React from 'react';
import TabIndex from '../atoms/TabIndex';

const TabIndices = () => {
  return (
    <Div>
      <TabIndex text="Issue" selected />
      <TabIndex text="Pull Request" selected={false} />
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px auto;
`;

export default TabIndices;
