import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import { MdAdd } from 'react-icons/md';
import { IoIosAlbums } from 'react-icons/io';

const AddBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  color: #5e6c84;
`;

const AddButton = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: none;
  color: #5e6c84;
  width: 220px;
  height: 28px;
  outline: none;
  border: none;
  border-radius: 3px;
  margin-right: 8px;

  &:hover {
    background: ${darken(0.2, '#ffffff')};
  }
`;

const AddIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;

const AddText = styled.div`
  font-size: 14px;
  margin-left: 3px;
`;

const AddTemplate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 6px;
  border-radius: 3px;
  width: 28px;
  height: 28px;

  &:hover {
    background: ${darken(0.2, '#ffffff')};
  }
`;

function AddCardButton(){
    return (
      <div>
        <AddBlock>
          <AddButton>
            <AddIcon>
              <MdAdd />
            </AddIcon>
            <AddText>
              Add another card
            </AddText>
          </AddButton>
          <AddTemplate>
            <IoIosAlbums />
          </AddTemplate>
        </AddBlock>
      </div>
    )
}

export default AddCardButton;