import styled from 'styled-components';
import React from 'react';
import Styles from '../Styles';
import { TabIndexSelected, TabIndexNotSelected} from '../atoms/TabIndex';


export const TabIndices = props => {
    return (
        <Div>
            <TabIndexSelected text='Issue' />
            <TabIndexNotSelected text='Pull Request' />
        </Div>
    )
}

const Div = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;