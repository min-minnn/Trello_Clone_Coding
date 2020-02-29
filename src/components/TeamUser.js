import React from "react";
import styled from "styled-components";
import { darken } from "polished";

const Users = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #dfe1e6;
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  font-size: 0.625rem;
  padding: 0.125rem;
  cursor: pointer;

  &:hover {
    background: ${darken(0.1, "#dfe1e6")};
  }
  &:active {
    background: ${darken(0.2, "#dfe1e6")};
  }
`;

function TeamUser({ users }) {
  return (
    <>
      {users.map(user => (
        <Users key={user.id} id={user.id}>
          {user.name}
        </Users>
      ))}
    </>
  );
}

export default TeamUser;
