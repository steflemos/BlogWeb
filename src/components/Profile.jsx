import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Profile.css'; 

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const username = 'steflemos'; 

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        setProfile(response.data);
      } catch (error) {
        console.error('Erro ao buscar o perfil', error);
      }
    };

    fetchProfile();
  }, [username]);

  if (!profile) return <div>Carregando perfil...</div>;

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className='icon-avatar'>
        <img src={profile.avatar_url} alt={`${profile.login}'s avatar`} className="profile-image" />
        </div>
        
        <div className="profile-details">
          <h1 className="profile-name">{profile.name}</h1>
          <p className="profile-bio">{profile.bio || 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}</p>
          <a href="https://github.com/steflemos" className="profile-button" target="_blank" rel="noopener noreferrer">VISITAR PERFIL</a>
          <div className="profile-stats">
            <span>seguidores: {profile.followers}</span>
            <span>seguindo: {profile.following}</span>
            <span>Repositórios Públicos: {profile.public_repos}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
