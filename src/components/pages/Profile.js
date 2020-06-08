import styled from 'styled-components';
import React from 'react';
import Styles from '../Styles';
import { Label } from '../atoms/Label';

const Profile = () => {
  return (
    <div>
      <Label text="Profile" />
      <Table>
        <Div direction="column">
          <Div>プロフィール</Div>
          <Div>
            <img src="../img/ui.png" alt="icon" />
          </Div>
        </Div>
        <Div direction="column">
          <Div>ユーザ名</Div>
          <Div bold>Tomona</Div>
          <Div>メールアドレス</Div>
          <Div bold>kari@example.com</Div>
        </Div>
      </Table>
    </div>
  );
};

const Div = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  font-size: 0.95em;
  color: ${(props) => (props.bold ? '#000' : '#444')};
  flex-direction: ${(props) =>
    props.direction === 'column' ? 'column' : 'row'};
`;

const Table = styled.div`
  display: flex;
  min-width: 400px;
  width: 80%;
  max-width: 600px;
  margin: 50px auto;
  border: 1px solid ${Styles.BORDER_COLOR};
`;
export default Profile;
