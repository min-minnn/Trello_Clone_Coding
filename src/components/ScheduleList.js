import React from "react";
import styled from "styled-components";
import { MdMoreHoriz } from "react-icons/md";
import ScheduleCardItem from "./ScheduleCardItem";
import CardInput from "./AddCardButton";

const ListBlock = styled.div`
  background: none;
  width: 17rem;
  height: 53.125rem;
  margin-right: 0.5rem;
  margin-top: 5.25rem;
`;

const List = styled.div`
  background: #ebecf0;
  border-radius: 3px;
  padding: 0.625rem;
`;

const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  width: 15.75rem;
  height: 1.25rem;
  font-size: 0.875rem;
  color: #172b4d;
  padding-bottom: 0.625rem;
`;

const HeaderText = styled.div`
  display: inline;
  margin-left: 0.5rem;
  font-weight: bold;
`;

const HeaderMenu = styled.div`
  float: right;
  margin-right: 0.25rem;
`;

const ListCards = styled.div`
  display: flex;
  flex-direction: column;
`;

function ScheduleList({ task, title }) {
  const cardList = task.map(item => (
    <ScheduleCardItem key={item.id} card={item} />
  ));

  return (
    <ListBlock>
      <List>
        <ListHeader>
          <HeaderText>{title}</HeaderText>
          <HeaderMenu>
            <MdMoreHoriz />
          </HeaderMenu>
        </ListHeader>
        <ListCards>{cardList}</ListCards>
        <CardInput />
      </List>
    </ListBlock>
  );
}

export default ScheduleList;
