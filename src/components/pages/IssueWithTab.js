import React, { useState } from 'react';
import Styles from '../Styles';
import IssueContainer from '../../container/IssueContainer';
import TabIndices from '../molecules/TabIndices';
import PullRequest from './PullRequest';

const IssueWithTab = () => {
  const [currentActive, setCurrentActive] = useState(IssueContainer);
  const changeCurrent = (event) => {
    const { id } = event.target;
    setCurrentActive(id);
  };
  return (
    <div>
      <TabIndices changeCurrent={changeCurrent} />
      {currentActive === IssueContainer ? <IssueContainer /> : <PullRequest />}
    </div>
  );
};

export default IssueWithTab;
