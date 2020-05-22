import styled from "styled-components";
import React from "react";
import Styles from "../Styles";
import { TableCell, TableCheckBoxCell } from "../atoms/TableCell";

const TableHeader = () => {
    return (
      <Div header >
        <TableCheckBoxCell />
        <TableCell text="" />
        <TableCell text="ステータス" />
        <TableCell text="作成者" />
        <TableCell text="作成日付" />
        <TableCell text="更新日付" />
      </Div>
    );
  };

const TableRow = (props) => {
  const { title, status, author, createdDate, updatedDate } = props.issue;
  return (
    <Div>
      <TableCheckBoxCell />
      <TableCell text={title} />
      <TableCell text={status} />
      <TableCell text={author} />
      <TableCell text={createdDate} />
      <TableCell text={updatedDate} />
    </Div>
  );
};

const Issues = (props) => {
    const { issues } = props;
    const issueRows = issues.map((issue, index) => {
      return (
        <Div>
          <TableRow key={index} issue={issue} />
        </Div>
      );
    });
    return issueRows;
  };

export const Table = (props) => {
    const { issues } = props;
    return (
        <TableContainer>
        <TableHeader></TableHeader>
        <Issues issues={issues} ></Issues>
        </TableContainer>
    )
};

const Div = styled.div`
  display: flex;
  width: 100%;
  color: #000;
  font-weight: ${(props) => (props.header ? 800 : 400)};
  margin: 1px 0px
`;


const TableContainer = styled.div`
  position: relative;
  padding: 0px;
  margin: 8px;
  border: 1px solid ${Styles.BORDER_COLOR};
  border-radius: ${Styles.BORDER_RADIUS};
  background: #fff;
  ::after{
    position: absolute;
    height: calc(100% + 16px);
    width:  calc(100% + 16px);
    top: 0px;
    left: 0px;
    background: ${Styles.BACKGROUND_COLOR.LIGHT};
    border: 1px solid ${Styles.BORDER_COLOR};
    content: '';
    z-index: -5;
}
    
`;
