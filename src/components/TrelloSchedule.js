import React from 'react';
import styled from 'styled-components';
import ScheduleList from './ScheduleList';

const ScheduleBlock = styled.div`
  display: flex;
  justify-content: flex-start;
  background: none;
  padding: 8px;
  padding-top: 0px;
`;

function TrelloSchedule(){
  const schedules = [
    {
      id: 1,
      title: 'Reminder'
    },
    {
      id: 2,
      title: 'Tasking Space(All)'
    },
    {
      id: 3,
      title: 'Task_Design'
    },
    {
      id: 4,
      title: 'Task_Frontend'
    }
  ]

  return (
    <ScheduleBlock>
      <ScheduleList schedules={schedules} />
    </ScheduleBlock>
  )
}

export default TrelloSchedule;