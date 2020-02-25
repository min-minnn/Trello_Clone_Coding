import React from 'react';
import styled from 'styled-components';
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
  width: 228px;
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
`;

const AddTemplate = styled.div`
  margin-right: 6px;
`;

function CardInput(){
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

export default CardInput;