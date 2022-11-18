import React from 'react';
import { Pencil, Trash } from 'react-bootstrap-icons';

import './ProfileLine.css';

const ProfileLine = ({ profile }) => {
  const editProfile = () => {

  }

  const delProfile = () => {

  }
  
  return (
    <div className='profile-line-component d-flex justify-content-between align-items-center'>
        <div className='id-container d-flex justify-content-center'>
          <h2>{ profile.id }</h2>
        </div>
        <div className='name-container d-flex justify-content-center align-items-center'>
          <h2>{ profile.name }</h2>
        </div>
        <div className='cpf-container d-flex justify-content-center align-items-center'>
          <h2>{ profile.cpf }</h2>
        </div>
        <div className='role-container d-flex justify-content-center align-items-center'>
          <h2>{ profile.role }</h2>
        </div>
        <div className='salary-container d-flex justify-content-center align-items-center'>
          <h2>{ profile.salary }</h2>
        </div>


        <div className='profile-icons-container d-flex'>
            <div className='icon-circle d-flex justify-content-center align-items-center' onClick={editProfile}>
                <Pencil size={24} color='#fff'/>
            </div>
            <div className='icon-circle d-flex justify-content-center align-items-center' onClick={delProfile}>
                <Trash size={24} color='#fff'/>
            </div>
        </div>
    </div>
  )
}

export default ProfileLine