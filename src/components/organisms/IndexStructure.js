import styled from 'styled-components';
import React from 'react';
import { TabIndices } from '../molecules/TabIndices';
import { Table } from '../molecules/Table';
import { IssueHeader } from '../molecules/IssueHeader';

export const IndexStructure = () => {
  return (
    <Container>
      <TabIndices />
      <IssueHeader />
      <Table />
    </Container>
  );
};

const Container = styled.div`
  max-width: 896px;
  margin: 0 auto;
`;
