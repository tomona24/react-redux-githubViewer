import styled from 'styled-components';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Styles from '../Styles';
import { TableCell, TableCheckBoxCell } from '../atoms/TableCell';
import ModalDiv from './ModalDiv';

export const IssueList = (props) => {
  const {
    issues,
    researchWord,
    changeDeleteList,
    wholeChecked,
    uploadEditIssue,
  } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const filteredIssues = issues.filter((issue) => {
    if (issue.title.toLowerCase().indexOf(researchWord) === -1) {
      return false;
    }
    return issue;
  });

  const handleClick = (index, isChecked) => {
    changeDeleteList(issues[index], isChecked);
  };

  // const checkAll = () => {
  //   for (let i = 0; i < issues.length; i++) {
  //     changeDeleteList(issues[i], wholeChecked);
  //   }
  // };

  const issueRows = filteredIssues.map((issue, index) => {
    const { title, status, author, createdDate, updatedDate } = issue;
    return (
      <Tr>
        <TableCheckBoxCell
          onClick={handleClick}
          index={index}
          wholeChecked={wholeChecked}
        />
        <Div key={title} onClick={openModal}>
          <TableCell text={title} />
          <TableCell text={status} />
          <TableCell text={author} />
          <TableCell text={createdDate} />
          <TableCell text={updatedDate} />
        </Div>
        <ModalDiv
          handleSubmit={uploadEditIssue}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          type="edit"
          editIssue={issue}
        />
      </Tr>
    );
  });
  if (filteredIssues.length === 0) {
    const sentence = "データがありません";
    return (
      <Div>
        <TableCell text={sentence} />
      </Div>
    );
  }
  return issueRows;
};

const TableHeader = (props) => {
  const { onWholeCheck, wholeChecked } = props;
  return (
    <Div header>
      <TableCheckBoxCell
        index={0}
        onClick={onWholeCheck}
        checked={wholeChecked}
      />
      <TableCell text="" />
      <TableCell text="ステータス" />
      <TableCell text="作成者" />
      <TableCell text="作成日付" />
      <TableCell text="更新日付" />
    </Div>
  );
};

const Table = (props) => {
  const { issues, researchWord, changeDeleteList, uploadEditIssue } = props;
  const [wholeChecked, setWholeChecked] = useState(false);
  const onWholeCheck = (index, isChecked) => {
    setWholeChecked(isChecked);
  };
  return (
    <TableContainer>
      <TableHeader onWholeCheck={onWholeCheck} wholeChecked={wholeChecked} />
      <IssueList
        issues={issues}
        researchWord={researchWord}
        changeDeleteList={changeDeleteList}
        wholeChecked={wholeChecked}
        uploadEditIssue={uploadEditIssue}
      />
    </TableContainer>
  );
};

Table.propTypes = {
  issues: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      createdDate: PropTypes.string.isRequired,
      updatedDate: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  researchWord: PropTypes.string.isRequired,
  changeDeleteList: PropTypes.func.isRequired,
  uploadEditIssue: PropTypes.func.isRequired,
};

TableHeader.propTypes = {
  onWholeCheck: PropTypes.func.isRequired,
  wholeChecked: PropTypes.bool.isRequired,
};

IssueList.propTypes = {
  issues: PropTypes.arrayOf().isRequired,
  researchWord: PropTypes.string.isRequired,
  changeDeleteList: PropTypes.func.isRequired,
  uploadEditIssue: PropTypes.func.isRequired,
};

const Div = styled.div`
  display: flex;
  width: 100%;
  color: #000;
  font-weight: ${(props) => (props.header ? 800 : 400)};
  margin: 1px 0px;
`;
const Tr = styled(Div)`
  :hover {
    background: ${Styles.BACKGROUND_COLOR.LIGHTBLUE};
  }
`;

const TableContainer = styled.div`
  position: relative;
  padding: 0px;
  margin: 16px;
  border: 1px solid ${Styles.BORDER_COLOR};
  border-radius: ${Styles.BORDER_RADIUS};
  background: #fff;
  ::after {
    position: absolute;
    height: calc(100% + 12px);
    width: calc(100% + 12px);
    top: 0px;
    left: 0px;
    background: ${Styles.BACKGROUND_COLOR.LIGHT};
    border: 1px solid ${Styles.BORDER_COLOR};
    content: "";
    z-index: -5;
  }
`;

export default Table;
