import styled from 'styled-components';
export const BtnWrap = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 10px;
`;

export const BtnFeedback = styled.button`
  display: flex;
  flex-direction: row;
  border: none;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  width: 80px;
  background-color:#5e5ea9;
  color:white;

  padding-top:10px;
  padding-bottom:10px;
  &:hover {
    scale: 1.1;
    background-color: grey;
    color:white;
  }
`;
