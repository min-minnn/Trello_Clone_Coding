import React from 'react'
import styled, {css} from 'styled-components';
import { FiHome, FiSearch } from 'react-icons/fi';
import { MdSettings, MdAdd } from 'react-icons/md';
import { FaTrello, FaRegBell } from 'react-icons/fa';

const BaseStyles = css`
  background: #828f9a;
  outline: none;
  border: none;
  border-radius: 3px;
  color: #f9f9fa;
  font-size: 15px;
  
  margin-right: 5px;

  height: 2rem;
 
  svg {
    padding-left: 2px;
    padding-right: 2px;
    cursor: pointer;
  }
`;

const TopBlock = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;
  background: #465f71;
  width: 1910px;
  height: 2rem;
  padding: 5px;
  opacity: 0.7;
  position: fixed;
`;

const LeftBtnBlock = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 450px;
`;

const TopButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  ${BaseStyles}
  
  &:hover {
    background: #6d7d8a;
  }
  &:active {
    background: #5a6d7b;
  }
`;

const TextBlock = styled.div`
  padding-left: 3px;
  padding-right: 3px;
`;

const Search = styled.button` 
  display: flex;
  justify-content: flex-end;
  cursor: text;
  background: none;
  border: none;
  outline: none;
  width: 10rem;

  ${BaseStyles}
  
  &:hover {
    background: #8e9ba4;
  }
`;

const Logo = styled.img`
  display: flex;
  align-content: center;
  font-size: 25px;
  width: 80px;
  height: 30px;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
`;

const RightBtnBlock = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 450px;
`;

const User = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #DFE1E6;
  border-radius: 50%;
  color: #172B4D;
  width: 2rem;
  height: 2rem;
  margin-right: 5px;
  cursor: pointer;
`;

function TrelloTop(){
  return(
    <TopBlock>
      <LeftBtnBlock>
        <TopButton><FiHome /></TopButton>
        <TopButton>
          <FaTrello /><TextBlock>Boards</TextBlock>
        </TopButton> 
        <Search><FiSearch /></Search>
      </LeftBtnBlock>
      <Logo src="https://a.trellocdn.com/prgb/dist/images/header-logo-2x.01ef898811a879595cea.png" />
      <RightBtnBlock>
        <TopButton><MdSettings /></TopButton>
        <User>김</User>
        <TopButton><FaRegBell /></TopButton>
        <TopButton><MdAdd /></TopButton>
      </RightBtnBlock>
    </TopBlock>
  )
}

export default TrelloTop;
