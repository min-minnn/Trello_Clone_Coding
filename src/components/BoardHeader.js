import React from "react";
import styled from "styled-components";
import { darken } from "polished";
import { FiStar, FiUsers } from "react-icons/fi";
import { FaSlack } from "react-icons/fa";
import { MdMoreHoriz } from "react-icons/md";
import TeamUser from "./TeamUser";

const DetailBlock = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 2rem;
  padding: 5px;
  position: fixed;
  margin-top: 2.625rem;
`;

const LeftBtnBlock = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
`;

const RightBtnBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  align-content: center;
  align-items: center;

  margin-right: 0.5rem;
`;

const TeamNameBlock = styled.div`
  display: flex;

  color: #1b2b4a;
  font-size: 1.125rem;
  font-weight: bold;

  padding: 3px;
  margin-right: 0.625rem;
  margin-left: 0.625rem;
`;

const DetailButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background: #a5b6c0;
  outline: none;
  border: none;
  border-radius: 3px;
  color: #4a5a79;
  font-size: 15px;

  height: 2rem;

  svg {
    padding-left: 0.125rem;
    padding-right: 0.125rem;
    cursor: pointer;
  }

  & + & {
    margin-left: 5px;
  }

  &:hover {
    background: ${darken(0.1, "#a5b6c0")};
  }
  &:active {
    background: ${darken(0.2, "#a5b6c0")};
  }
`;

const Divider = styled.div`
  border-right: 1px solid #778593;
  height: 1rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;

const TextBlock = styled.div`
  display: flex;
  align-items: center;
  padding-left: 3px;
  padding-right: 3px;
`;

const FreeBlock = styled.div`
  background: #869ca1;
  color: #273c5a;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  border-radius: 0.75rem;
  font-size: 13px;
  padding: 0.125rem 0.375rem;
`;

const CountUser = styled.div`
  display: flex;
  justify-content: center;
  background: #869caa;
  color: #273c5a;
  border-radius: 0.75rem;
  padding: 3px;
  padding-left: 5px;
  padding-right: 5px;
  height: 1.25rem;
  font-size: 13px;
  margin-right: 0.625rem;

  &:hover {
    background: ${darken(0.1, "#869caa")};
  }
  &:active {
    background: ${darken(0.2, "#869caa")};
  }
`;

const ButlerIcon = styled.img`
  height: 15px;
  margin-right: 5px;
`;

function BoardHeader() {
  const users = [
    {
      id: 1,
      name: "김"
    },
    {
      id: 2,
      name: "WOO"
    },
    {
      id: 3,
      name: "P"
    },
    {
      id: 4,
      name: "S"
    },
    {
      id: 5,
      name: "강민"
    }
  ];

  return (
    <DetailBlock>
      <LeftBtnBlock>
        <TeamNameBlock>Hanlight_V2</TeamNameBlock>
        <DetailButton>
          <FiStar />
        </DetailButton>
        <Divider />
        <DetailButton>
          <TextBlock>
            한빛<FreeBlock>Free</FreeBlock>
          </TextBlock>
        </DetailButton>
        <Divider />
        <DetailButton>
          <FiUsers />
          <TextBlock>Team Visible</TextBlock>
        </DetailButton>
        <Divider />
        <TeamUser users={users} />
        <CountUser>+12</CountUser>
        <DetailButton>
          <TextBlock>Invite</TextBlock>
        </DetailButton>
      </LeftBtnBlock>
      <RightBtnBlock>
        <DetailButton>
          <TextBlock>
            <ButlerIcon src="https://app.butlerfortrello.com/master-201/img/butler-powerup-btn-dark.svg" />
            Butler
          </TextBlock>
        </DetailButton>
        <DetailButton>
          <FaSlack />
          <TextBlock>Slack</TextBlock>
        </DetailButton>
        <DetailButton>
          <MdMoreHoriz />
          <TextBlock>Show Menu</TextBlock>
        </DetailButton>
      </RightBtnBlock>
    </DetailBlock>
  );
}

export default BoardHeader;
