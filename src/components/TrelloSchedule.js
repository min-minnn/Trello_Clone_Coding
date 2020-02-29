import React from "react";
import AddListButton from "./AddListButton";
import styled from "styled-components";
import ScheduleList from "./ScheduleList";

const ScheduleBlock = styled.div`
  display: flex;
  padding: 0.5rem;
`;

function TrelloSchedule() {
  const schedules = [
    {
      id: 1,
      title: "Reminder",
      task: [
        {
          id: 1,
          value: "To do",
          text: "한빛에 졸업식 영상 게시",
          title: "Reminder"
        },
        {
          id: 2,
          value: "To do",
          text: "자료 수집",
          title: "Reminder"
        },
        {
          id: 3,
          value: "Complete",
          text: "당일 시간표 수정",
          title: "Tasking Space(All)"
        },
        {
          id: 4,
          value: "Progress",
          text: "한빛 뮤직",
          title: "Tasking Space(All)"
        },
        {
          id: 5,
          value: "To do",
          text: "재원이 협업",
          title: "Tasking Space(All)"
        }
      ]
    },
    {
      id: 2,
      title: "Tasking Space(All)",
      task: [
        {
          id: 1,
          value: "To do",
          text: "한빛에 졸업식 영상 게시",
          title: "Reminder"
        },
        {
          id: 2,
          value: "To do",
          text: "자료 수집",
          title: "Reminder"
        },
        {
          id: 3,
          value: "Complete",
          text: "당일 시간표 수정",
          title: "Tasking Space(All)"
        },
        {
          id: 4,
          value: "Progress",
          text: "한빛 뮤직",
          title: "Tasking Space(All)"
        },
        {
          id: 5,
          value: "To do",
          text: "재원이 협업",
          title: "Tasking Space(All)"
        }
      ]
    },
    {
      id: 3,
      title: "Task_Design",
      task: [
        {
          id: 1,
          value: "To do",
          text: "한빛에 졸업식 영상 게시",
          title: "Reminder"
        },
        {
          id: 2,
          value: "To do",
          text: "자료 수집",
          title: "Reminder"
        },
        {
          id: 3,
          value: "Complete",
          text: "당일 시간표 수정",
          title: "Tasking Space(All)"
        },
        {
          id: 4,
          value: "Progress",
          text: "한빛 뮤직",
          title: "Tasking Space(All)"
        },
        {
          id: 5,
          value: "To do",
          text: "재원이 협업",
          title: "Tasking Space(All)"
        }
      ]
    },
    {
      id: 4,
      title: "Task_Frontend",
      task: [
        {
          id: 1,
          value: "To do",
          text: "한빛에 졸업식 영상 게시",
          title: "Reminder"
        },
        {
          id: 2,
          value: "To do",
          text: "자료 수집",
          title: "Reminder"
        },
        {
          id: 3,
          value: "Complete",
          text: "당일 시간표 수정",
          title: "Tasking Space(All)"
        },
        {
          id: 4,
          value: "Progress",
          text: "한빛 뮤직",
          title: "Tasking Space(All)"
        },
        {
          id: 5,
          value: "To do",
          text: "재원이 협업",
          title: "Tasking Space(All)"
        }
      ]
    }
  ];

  const scheduleList = schedules.map(item => (
    <ScheduleList key={item.id} task={item.task} title={item.title} />
  ));

  return (
    <ScheduleBlock>
      {scheduleList}
      <AddListButton />
    </ScheduleBlock>
  );
}

export default TrelloSchedule;
