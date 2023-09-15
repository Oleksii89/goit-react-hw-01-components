import styled from 'styled-components';

export const FriendItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  margin-top: 10px;
  box-shadow: 0 0 10px #c6cccced;
`;

export const Photo = styled.img`
  width: 48px;
  height: 48px;
  margin-right: 40px;
`;

export const FriendNameText = styled.p`
  font-weight: 700;
  font-size: 25px;
  color: grey;
`;

export const StatusFriend = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 20px;
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
`;
