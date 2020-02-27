import React from 'react';
import styled, {css} from 'styled-components';
import { darken } from 'polished';

const LabelColors = css`
  ${props => {
    if(props.value === 'To do'){
      return css`
        background: #EB5A46;

        &:hover {
          background: ${darken(0.2, '#EB5A46')}
        }
      `
    }
    else if(props.value === 'Complete'){
      return css`
        background: #61BD4F;
        padding-right: 16px;

        &:hover {
          background: ${darken(0.1, '#61BD4F')}
        }
      `
    }
    else if(props.value === 'Progress'){
      return css`
        background: #F2D600;
        padding-right: 8px;

        &:hover {
          background: ${darken(0.1, '#F2D600')}
        }
    `
    }
  }
}
`;

const ListCards = styled.div`
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

  &:hover {
    background: ${darken(0.1, '#ffffff')};
  }
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
        <Cards key={card.id} id={card.id}>
          <CardLabel value={card.value}>{card.value}</CardLabel>
          <CardText>{card.text}</CardText>
        </Cards>
      ))}
    </ListCards>
  )
}

export default ScheduleCard;