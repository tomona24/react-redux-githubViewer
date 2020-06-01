import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import { prototype } from 'react-modal';
import { PrimaryButton, SecondaryButton } from '../atoms/Button';
import { Label } from '../atoms/Label';
import TextBar from '../atoms/TextBar';

const IssueHeader = (props) => {
  const { setNewResearchWord, deleteIssue } = props;

  return (
    <Div>
      <Label text="Issue" />
      <TextBar setNewResearchWord={setNewResearchWord} />
      <PrimaryButton text="New" />
      <SecondaryButton text="Delete" onClick={deleteIssue} />
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
  deleteIssue: PropTypes.func.isRequired,
};

export default IssueHeader;
