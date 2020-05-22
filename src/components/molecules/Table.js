import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import { Provider, connect } from 'react-redux';
import Styles from '../Styles';
import store from '../../store';
import { TableCell, TableCheckBoxCell } from '../atoms/TableCell';

// const TableRow = (props) => {
//   const { title, status, author, createdDate, updatedDate } = props.issue;

//   return (
//     <Div>
//       <TableCheckBoxCell />
//       <TableCell text={title} />
//       <TableCell text={status} />
//       <TableCell text={author} />
//       <TableCell text={createdDate} />
//       <TableCell text={updatedDate} />
//     </Div>
//   );
// };

export const IssueList = ({ issues }) => {
  const issueRows = issues.map((issue) => {
    const { title, status, author, createdDate, updatedDate } = issue;
    // return (
    //   <Div>
    /* <TableRow key={index} issue={issue} /> */
    // </Div>
    // );
    return (
      <Div key={title}>
        <TableCheckBoxCell />
        <TableCell text={title} />
        <TableCell text={status} />
        <TableCell text={author} />
        <TableCell text={createdDate} />
        <TableCell text={updatedDate} />
      </Div>
    );
  });
  return issueRows;
};

const TableHeader = () => {
  return (
    <Div header>
      <TableCheckBoxCell />
      <TableCell text="" />
      <TableCell text="ステータス" />
      <TableCell text="作成者" />
      <TableCell text="作成日付" />
      <TableCell text="更新日付" />
    </Div>
  );
};

const mapStateToProps = (state) => {
  return { issues: state };
};

const Container = connect(mapStateToProps, null)(IssueList);

export const Table = () => {
  // const { issues } = props;
  return (
    <TableContainer>
      <TableHeader />
      {/* <IssueList issues={issues} ></IssueList> */}
      <Provider store={store}>
        <Container />
      </Provider>
    </TableContainer>
  );
};

IssueList.propTypes = {
  issues: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      title: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      createdDate: PropTypes.string.isRequired,
      updatedDate: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

const Div = styled.div`
  display: flex;
  width: 100%;
  color: #000;
  font-weight: ${(props) => (props.header ? 800 : 400)};
  margin: 1px 0px;
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
