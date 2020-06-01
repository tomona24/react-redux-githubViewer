import styled from 'styled-components';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { DefaultButton, PrimaryButton, SecondaryButton } from '../atoms/Button';
import { Label } from '../atoms/Label';
import TextArea from '../atoms/TextArea';
import TextBar from '../atoms/TextBar';

const TITLE = 'title';
const DETAIL = 'detail';

const IssueHeader = (props) => {
  const { setNewResearchWord, submitAddNewIssue, submitDeleteIssue } = props;
  return (
    <Div>
      <Label text="Issue" />
      <TextBar setNewResearchWord={setNewResearchWord} />
      <ModalDiv submitAddNewIssue={submitAddNewIssue} />
      <SecondaryButton onClick={submitDeleteIssue} text="Delete" />
    </Div>
  );
};

const customStyles = {
  content: {
    display: 'block',
    top: '20vh',
    width: '600px',
    height: '60vh',
    padding: '50px',
    margin: '20vh auto',
    transform: 'translate(-50%, -50%)',
  },
};

const initialNewIssueState = {
  title: '',
  detail: '',
  status: '',
  author: '',
  createdDate: '',
  updatedDate: '',
};

const ModalDiv = (props) => {
  const { submitAddNewIssue } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newIssue, setNewIssue] = useState({});

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (event) => {
    const { userInput } = event.value;
    const updateIssue = { ...newIssue };
    switch (event.id) {
      case TITLE:
        updateIssue.title = userInput;
        break;
      case DETAIL:
        updateIssue.detail = userInput;
        break;
      default:
    }
    setNewIssue(updateIssue);
  };

  return (
    <div>
      <PrimaryButton onClick={openModal} text="Open" />
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Add New Issue"
        style={customStyles}
      >
        <Label text="タイトル" />
        <TextBar />
        <Label text="説明" />
        <TextArea />
        <Div>
          <PrimaryButton onClick={submitAddNewIssue} text="New" />
          <DefaultButton onClick={closeModal} text="閉じる" />
        </Div>
      </Modal>
    </div>
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

ModalDiv.propTypes = {
  submitAddNewIssue: PropTypes.func.isRequired,
};

export default IssueHeader;
