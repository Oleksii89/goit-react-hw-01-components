import {
  FriendItem,
  FriendNameText,
  Photo,
  StatusFriend,
  // StatusFriendOnline,
} from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <FriendItem key={id}>
      <StatusFriend isOnline={isOnline}></StatusFriend>
      <Photo src={avatar} alt={name} />
      <FriendNameText>{name}</FriendNameText>
    </FriendItem>
  );
};
