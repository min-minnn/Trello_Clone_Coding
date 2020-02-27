import React from 'react';
import styled from 'styled-components';
import { MdMoreHoriz } from 'react-icons/md';
import ScheduleCard from './ScheduleCard';
import CardInput from './AddCardButton';
import AddListButton from './AddListButton';

const ListBlock = styled.div`
  background: none;
  width: 272px;
  height: 850px;
  margin-right: 8px;
  margin-top: 84px;
`;

const List = styled.div`
  background: #ebecf0;
  border-radius: 3px;
  padding: 10px;
`;

const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  width: 252px;
  height: 20px;
  font-size: 14px;
  color: #172b4d;
  padding-bottom: 10px;
`;

const HeaderText = styled.div`
  display: inline;
  margin-left: 8px;
`;

const HeaderMenu = styled.div`
  float: right;
  margin-right: 4px;
`;

function ScheduleList({schedules}){
  const cards = [
    {
      id: 1,
      value: 'To do',
      text: '한빛에 졸업식 영상 게시',
      title: 'Reminder'
    },
    {
      id: 2,
      value: 'To do',
      text: '자료 수집',
      title: 'Reminder'
    },
    {
      id: 3,
      value: 'Complete',
      text: '당일 시간표 수정',
      title: 'Tasking Space(All)'
    },
    {
      id: 4,
      value: 'Progress',
      text: '한빛 뮤직',
      title: 'Tasking Space(All)'
    },
    {
      id: 5,
      value: 'To do',
      text: '재원이 협업',
      title: 'Tasking Space(All)'
    }
  ]

  return (
    <>
      {schedules.map(schedule => (
        <ListBlock key={schedule.id} id={schedule.id}>
          <List>
            <ListHeader  >
              <HeaderText   >{schedule.title}</HeaderText>
              <HeaderMenu><MdMoreHoriz /></HeaderMenu>
            </ListHeader>
            <ScheduleCard cards={cards} />
            <CardInput />
          </List>
        </ListBlock>
      ))}
      <AddListButton />
    </>
  )
}

export default ScheduleList;