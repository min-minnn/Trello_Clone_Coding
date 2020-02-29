import React from "react";
import styled, { css } from "styled-components";
import { darken } from "polished";

const LabelColors = css`
  ${props => {
    if (props.value === "To do") {
      return css`
        background: #eb5a46;

        &:hover {
          background: ${darken(0.2, "#EB5A46")};
        }
      `;
    }
    if (props.value === "Complete") {
      return css`
        background: #61bd4f;
        padding-right: 1rem;

        &:hover {
          background: ${darken(0.1, "#61BD4F")};
        }
      `;
    }
    if (props.value === "Progress") {
      return css`
        background: #f2d600;
        padding-right: 0.5rem;

        &:hover {
          background: ${darken(0.1, "#F2D600")};
        }
      `;
    }
  }}
`;

const Cards = styled.div`
  background: #ffffff;
  border-radius: 3px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  border-bottom: 1px solid #b2b9c5;

  &:hover {
    background: ${darken(0.1, "#ffffff")};
  }
`;

const CardLabel = styled.div`
  width: 2.875rem;
  height: 1rem;
  font-size: 0.75rem;
  color: #ffffff;
  border-radius: 3px;
  padding-left: 0.5rem;
  margin-bottom: 5px;

  ${LabelColors}
`;

const CardText = styled.div`
  font-size: 0.875rem;
  display: flex;
  align-items: center;
`;

function ScheduleCard({ card }) {
  return (
    <Cards key={card.id} id={card.id}>
      <CardLabel value={card.value}>{card.value}</CardLabel>
      <CardText>{card.text}</CardText>
    </Cards>
  );
}

export default ScheduleCard;
