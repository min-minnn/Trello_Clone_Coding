import React from 'react';
import styled from 'styled-components';
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
  margin-top: 5.25rem;
`;

function ListInput(){
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

export default ListInput;