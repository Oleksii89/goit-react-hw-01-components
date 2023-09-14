import {
  DescriptionContainer,
  LabelText,
  LocationText,
  Photo,
  ProfileContainer,
  QuantityText,
  StatsContainer,
  StatsList,
  TagText,
  UsernameText,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileContainer>
      <DescriptionContainer>
        <Photo src={avatar} alt={username} />
        <UsernameText>{username}</UsernameText>
        <TagText>@{tag}</TagText>
        <LocationText>{location}</LocationText>
      </DescriptionContainer>

      <StatsList>
        <StatsContainer>
          <LabelText>Followers</LabelText>
          <QuantityText>{stats.followers}</QuantityText>
        </StatsContainer>
        <StatsContainer>
          <LabelText>Views</LabelText>
          <QuantityText>{stats.views}</QuantityText>
        </StatsContainer>
        <StatsContainer>
          <LabelText>Likes</LabelText>
          <QuantityText>{stats.likes}</QuantityText>
        </StatsContainer>
      </StatsList>
    </ProfileContainer>
  );
};
