import styled from 'styled-components';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { Button } from '../atoms/Button';
import { Label } from '../atoms/Label';
import TextArea from '../atoms/TextArea';
import TextBar from '../atoms/TextBar';

const TITLE = 'title';
const DETAIL = 'detail';
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
  id: '',
  title: '',
  detail: '',
  status: 'open',
  author: '',
  createdDate: '',
  updatedDate: '',
};

const ModalDiv = (props) => {
  const { handleSubmit, editIssue, isModalOpen, setIsModalOpen } = props;
  const [newIssue, setNewIssue] = useState(editIssue || initialNewIssueState);
  const headTitle = editIssue ? 'Issueを編集' : 'Issueを追加';
  const buttonText = editIssue ? '更新' : 'New';
  const isClose = newIssue.status === 'close';

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const submit = () => {
    const createNewIssue = { ...newIssue };
    if (!editIssue) {
      createNewIssue.status = 'go';
      createNewIssue.author = 'gi';
      createNewIssue.createdDate = 'uma';
      createNewIssue.id = createNewIssue.title + createNewIssue.createdDate;
    }
    createNewIssue.updatedDate = '今日';
    handleSubmit(createNewIssue);
    closeModal();
  };

  const updateTitle = (userInput) => {
    const updateIssue = { ...newIssue };
    updateIssue.title = userInput;
    setNewIssue(updateIssue);
  };

  const updateDetail = (userInput) => {
    const updateIssue = { ...newIssue };
    updateIssue.detail = userInput;
    setNewIssue(updateIssue);
  };

  const updateStatus = (event) => {
    const { value } = event.target;
    const updateIssue = { ...newIssue };
    updateIssue.status = value;
    setNewIssue(updateIssue);
  };

  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <Label text={headTitle} />
        <Label text="タイトル" />
        <TextBar
          id={TITLE}
          getTheValue={updateTitle}
          text={newIssue.title}
          placeholder="タイトルを入力してください"
        />
        <Label text="説明" />
        <TextArea
          id={DETAIL}
          getTheValue={updateDetail}
          text={newIssue.detail}
          placeholder="説明を入力してください"
        />
        <Div hide={!editIssue}>
          ステータス
          <select name="status" onChange={updateStatus}>
            <option value="open">Open</option>
            <option value="close" selected={isClose}>
              Close
            </option>
          </select>
        </Div>
        <Div>
          <Button onClick={submit} text={buttonText} type="primary" />
          <Button onClick={closeModal} text="閉じる" />
        </Div>
      </Modal>
    </div>
  );
};

const Div = styled.div`
  display: ${(props) => (props.hide ? 'none' : 'flex')};
  margin: 8px;
  padding: 0px;
  width: 100%;
  color: #000;
  font-weight: ${(props) => (props.header ? 800 : 400)};
`;

ModalDiv.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  editIssue: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      createdDate: PropTypes.string.isRequired,
      updatedDate: PropTypes.string.isRequired,
    })
  ).isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
};

export default ModalDiv;
