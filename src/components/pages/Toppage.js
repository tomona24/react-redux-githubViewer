import React from 'react';
import { Route } from 'react-router-dom';
import IssueContainer from '../../container/IssueContainer';
import TabIndices from '../molecules/TabIndices';
import PullRequest from './PullRequest';
import Profile from './Profile';

const issueWithTab = () => {
  return (
    <div>
      <TabIndices />
      <IssueContainer />
    </div>
  );
};

const Toppage = () => {
  return (
    <div>
      <Route exact path="/" component={issueWithTab} />
      <Route path="/issue" component={IssueContainer} />
      <Route path="/pullRequest" component={PullRequest} />
      <Route path="/profile" component={Profile} />
    </div>
  );
};

export default Toppage;
