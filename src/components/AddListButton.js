import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import { MdAdd } from 'react-icons/md';

const AddButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  color: #172b4d;
  width: 272px;
  height: 28px;
  outline: none;
  border: none;
`;

const AddIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
`;

const AddText = styled.div`
  font-size: 14px;
  margin-left: 3px;
  font-size: 14px;
`;

const AddBlock =  styled.div`
  display: flex;
  align-items: center;
  width: 272px;
  height: 40px;
  background: #7b91a0;
  border-radius: 3px;
  opacity: 0.8;
  margin-top: 84px;

  &:hover {
    background: ${darken(0.1, '#7b91a0')};
  }
`;

function AddListButton(){
  return (
    <AddBlock>
      <AddButton>
        <AddIcon>
          <MdAdd/>
        </AddIcon>
        <AddText>
          Add another list
        </AddText>
      </AddButton>
    </AddBlock>
  )
}

export default AddListButton;