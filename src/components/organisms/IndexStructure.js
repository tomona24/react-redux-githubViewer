import styled from "styled-components";
import React from "react";
import Styles from "../Styles";
import { TabIndices } from "../molecules/TabIndices";
import { Table } from "../molecules/Table";
import { IssueHeader } from "../molecules/IssueHeader";

const kariData = {
  title: "ore",
  detail: "meshi kuu",
  status: "banana",
  author: "umai",
  createdDate: "gorira",
  updatedDate: "gorira",
};

const issues = [kariData, kariData, kariData];

export const IndexStructure = (props) => {
  return (
    <Container>
      <TabIndices />
      <IssueHeader />
      <Table issues={issues} />
    </Container>
  );
};


const Container = styled.div`
    max-width: 896px;
    margin: 0 auto;
`;
