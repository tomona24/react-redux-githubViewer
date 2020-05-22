import styled from 'styled-components';
import React from 'react';
import Styles from '../Styles';
import {PrimaryButton, SecondaryButton} from '../atoms/Button'
import {Label} from '../atoms/Label'
import {TextBar} from '../atoms/TextBar'


export const IssueHeader = props => {
    return (
        <Div>
            <Label text='Issue' />
            <TextBar />
            <PrimaryButton text='New' />
            <SecondaryButton text='Delete' />
        </Div>
    )
}

const Div = styled.div`
  display: flex;
  margin: 8px;
  width: 100%;
  color: #000;
  font-weight: ${props => props.header ? 800 : 400 };
`;