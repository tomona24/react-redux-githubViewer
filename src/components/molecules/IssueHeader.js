import styled from 'styled-components';
import React from 'react';
import { PrimaryButton, SecondaryButton } from '../atoms/Button';
import { Label } from '../atoms/Label';
import { TextBar } from '../atoms/TextBar';

export const IssueHeader = () => {
  return (
    <Div>
      <Label text="Issue" />
      <TextBar />
      <PrimaryButton text="New" />
      <SecondaryButton text="Delete" />
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
