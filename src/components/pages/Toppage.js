import React from 'react';
import { Route } from 'react-router-dom';
import IssueContainer from '../../container/IssueContainer';
import PullRequest from './PullRequest';
import Profile from './Profile';
import IssueWithTab from './IssueWithTab';

const Toppage = () => {
  return (
    <div>
      <Route exact path="/react-redux-githubViewer" component={IssueWithTab} />
      <Route exact path="/react-redux-githubViewer/issue" component={IssueContainer} />
      <Route exact path="/react-redux-githubViewer/pullRequest" component={PullRequest} />
      <Route exact path="/react-redux-githubViewer/profile" component={Profile} />
    </div>
  );
};

export default Toppage;
