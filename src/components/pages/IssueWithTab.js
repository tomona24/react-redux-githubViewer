import React, { useState } from 'react';
import IssueContainer from '../../container/IssueContainer';
import TabIndices from '../molecules/TabIndices';
import PullRequest from './PullRequest';

const IssueWithTab = () => {
  const [currentActive, setCurrentActive] = useState('IssueContainer');
  return (
    <div>
      <TabIndices changeCurrent={setCurrentActive} />
      {currentActive === 'IssueContainer' ? (
        <IssueContainer />
      ) : (
        <PullRequest />
      )}
    </div>
  );
};

export default IssueWithTab;
