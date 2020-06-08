import React from 'react';
import { Route } from 'react-router-dom';
import IssueContainer from '../../container/IssueContainer';
import PullRequest from './PullRequest';
import Profile from './Profile';
import IssueWithTab from './IssueWithTab';

const Toppage = () => {
  return (
    <div>
      <Route exact path="/" component={IssueWithTab} />
      <Route path="/issue" component={IssueContainer} />
      <Route path="/pullRequest" component={PullRequest} />
      <Route path="/profile" component={Profile} />
    </div>
  );
};

export default Toppage;
