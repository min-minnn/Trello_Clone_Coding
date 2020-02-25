import React from 'react';
import styled from 'styled-components';

const Users = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #dfe1e6;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  font-size: 10px;
  padding: 2px;
  cursor: pointer;
`;

function TeamUser({users}){
  return(
    <>
      {users.map(user => (
        <Users key={user.id} id={user.id}>{user.name}</Users>
      ))}
    </>
  )
}

export default TeamUser;