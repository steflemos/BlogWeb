import React from 'react';
import { Link } from 'react-router-dom';
import './IssueList.css'; 

const IssueList = ({ issues }) => (
  <ul className="issue-list">
    {issues.map(issue => (
      <li key={issue.number} className="issue-item">
        <Link to={`/issue/${issue.number}`}>{issue.title}</Link>
      </li>
    ))}
  </ul>
);

export default IssueList;
