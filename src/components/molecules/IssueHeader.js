import styled from 'styled-components';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import Modal from 'react-modal';
import { Button } from '../atoms/Button';
import { Label } from '../atoms/Label';
// import TextArea from '../atoms/TextArea';
import TextBar from '../atoms/TextBar';
import ModalDiv from './ModalDiv';

// const TITLE = 'title';
// const DETAIL = 'detail';

const IssueHeader = (props) => {
  const { setNewResearchWord, submitAddNewIssue, submitDeleteIssue } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  return (
    <Div>
      <Label text="Issue" />
      <TextBar getTheValue={setNewResearchWord} placeholder="issue名で検索" />
      <Button onClick={openModal} text="Open" type="primary" />
      <ModalDiv
        handleSubmit={submitAddNewIssue}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        type="new"
      />
      <Button onClick={submitDeleteIssue} text="Delete" type="secondary" />
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  margin: 8px;
  padding: 0px;
  width: 100%;
  color: #000;
  font-weight: ${(props) => (props.header ? 800 : 400)};
`;

IssueHeader.propTypes = {
  setNewResearchWord: PropTypes.func.isRequired,
  submitAddNewIssue: PropTypes.func.isRequired,
  submitDeleteIssue: PropTypes.func.isRequired,
};

export default IssueHeader;
