import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Profile from '../components/Profile'; 
import './HomePage.css'; 

const HomePage = () => {
  const [issues, setIssues] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const response = await axios.get(`https://api.github.com/search/issues?q=${search}+repo:steflemos/treino`);
        setIssues(response.data.items);
      } catch (error) {
        console.error('Erro ao buscar as issues', error);
      }
    };

    fetchIssues();
  }, [search]);

  return (
    <div className="home-page">
      
      <Profile /> 

      <div className="recent-posts">
        {issues.map((issue) => (
          <Link to={`/issue/${issue.number}`} key={issue.id} className="issue-item">
            <h3>{issue.title}</h3>
            <p>{issue.body.length > 100 ? `${issue.body.substring(0, 150)}...` : issue.body}</p> 
            <div className="issue-meta">
              <span>{new Date(issue.created_at).toLocaleDateString()}</span> | 
              <span> {issue.user.login}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
