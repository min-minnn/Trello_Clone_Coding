import React from 'react';
import styled, {css} from 'styled-components';

const LabelColors = css`
  ${props => 
    props.value ==='To do' &&
    css`
      background: #EB5A46;
    `
  }
  ${props => 
    props.value ==='Complete' &&
    css`
      background: #61BD4F;
      padding-right: 16px;
    `
  }
  ${props => 
    props.value ==='Progress' &&
    css`
      background: #F2D600;
      padding-right: 8px;
    `
  }
`;

const ListCards = styled.div`
  background: none;
  display: flex;
  flex-direction: column;
`;

const Cards = styled.div`
  background: #ffffff;
  border-radius: 3px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 8px;
  margin-bottom: 8px;
  border-bottom: 1px solid #b2b9c5;
`;

const CardLabel = styled.div`
  width: 46px;
  height: 16px;
  font-size: 12px;
  color: #ffffff;
  border-radius: 3px;
  padding-left: 8px;
  margin-bottom: 5px;

  ${LabelColors}
`;

const CardText = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
`;

function ScheduleCard({cards}){
  return (
    <ListCards>
      {cards.map(card => (
        <Cards>
          <CardLabel key={card.id} id={card.id} value={card.value}>{card.value}</CardLabel>
          <CardText>{card.text}</CardText>
        </Cards>
      ))}
    </ListCards>
  )
}

export default ScheduleCard;