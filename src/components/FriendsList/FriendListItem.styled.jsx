import styled from 'styled-components';

export const FriendItemStyled = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  min-width: 200px;
  background-color: white;
  padding: 5px;
  border-radius: 10px;
  background: #e0e0e0;
  box-shadow: 5px -5px 15px #afafaf, -5px 5px 15px #ffffff;
`;

export const Position = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 100%;
  background: #e0e0e0;
  box-shadow: 2px -2px 5px #bebebe, -2px 2px 5px #ffffff;
  background-color: ${props => {
    switch (props.position) {
      case true:
        return 'green';
      case false:
        return 'red';
      default:
        return 'white';
    }
  }};
`;

export const FriendName = styled.p`
  font-family: 'Roboto, system-ui, sans-serif';
  font-size: 25px;
`;
