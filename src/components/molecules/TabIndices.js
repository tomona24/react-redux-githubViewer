import styled from 'styled-components';
import React from 'react';
import { TabIndexSelected, TabIndexNotSelected } from '../atoms/TabIndex';

export const TabIndices = () => {
  return (
    <Div>
      <TabIndexSelected text="Issue" />
      <TabIndexNotSelected text="Pull Request" />
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px auto;
`;
