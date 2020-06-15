import styled from 'styled-components';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Styles from '../Styles';
import { TableCell, TableCheckBoxCell } from '../atoms/TableCell';
import ModalDiv from './ModalDiv';

export const IssueList = (props) => {
  const {
    issues,
    checkedIssue,
    researchWord,
    handleCheckIssue,
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

  // const checkAll = () => {
  //   for (let i = 0; i < issues.length; i++) {
  //     changeDeleteList(issues[i], wholeChecked);
  //   }
  // };

  const issueRows = filteredIssues.map((issue, index) => {
    const { title, status, author, createdDate, updatedDate } = issue;
    const handleClick = () => {
      handleCheckIssue(issue);
    };
    return (
      <Tr>
        <TableCheckBoxCell
          onClick={handleClick}
          checked={checkedIssue[issue.id]}
          width="50px"
        />
        <Div key={title} onClick={openModal}>
          <TableCell text={title} width="50%" />
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
    const sentence = 'データがありません';
    return (
      <Div>
        <TableCell text={sentence} />
      </Div>
    );
  }
  return issueRows;
};

const TableHeader = (props) => {
  const { onWholeCheck } = props;
  const [checked, setChecked] = useState(false);
  const onClick = () => {
    onWholeCheck(!checked)
    setChecked(!checked)
  }
  return (
    <Tr>
      <TableCheckBoxCell
        onClick={onClick}
        checked={checked}
        width="50px"
      />
      <Div header>
        <TableCell text="" width="50%" />
        <TableCell text="ステータス" />
        <TableCell text="作成者" />
        <TableCell text="作成日付" />
        <TableCell text="更新日付" />
      </Div>
    </Tr>
  );
};

const Table = (props) => {
  const { issues, checkedIssue, researchWord, handleCheckAll, handleCheckIssue, uploadEditIssue } = props;
  const onCheckAll = (isChecked) => {
    let newCheckedIssue = {...checkedIssue};
    if (isChecked) {
      issues.forEach(issue => newCheckedIssue[issue.id] = issue)
    } else {
      newCheckedIssue = {}
    }
    handleCheckAll(newCheckedIssue)
  };
  return (
    <TableContainer>
      <TableHeader onWholeCheck={onCheckAll} />
      <IssueList
        issues={issues}
        checkedIssue={checkedIssue}
        researchWord={researchWord}
        handleCheckIssue={handleCheckIssue}
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
  setCheckedIssue: PropTypes.func.isRequired,
  uploadEditIssue: PropTypes.func.isRequired,
};

TableHeader.propTypes = {
  onWholeCheck: PropTypes.func.isRequired,
  wholeChecked: PropTypes.bool.isRequired,
};

IssueList.propTypes = {
  issues: PropTypes.arrayOf().isRequired,
  checkedIssue: PropTypes.obj,
  researchWord: PropTypes.string.isRequired,
  changeDeleteList: PropTypes.func.isRequired,
  uploadEditIssue: PropTypes.func.isRequired,
};

const Div = styled.div`
  display: flex;
  justify-content: flex-end;
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
    content: '';
    z-index: -5;
  }
`;

export default Table;
