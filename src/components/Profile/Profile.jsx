import PropTypes from 'prop-types';
import {
  Avatar,
  UserName,
  Tag,
  Location,
  StatsList,
  StatsItem,
  StatusValue,
} from 'components/Profile/Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <>
      <Avatar src={avatar} alt="User avatar" width={200} />
      <UserName>{username}</UserName>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>
      <StatsList>
        <StatsItem>
          <span>Followers</span>
          <StatusValue>{stats.followers}</StatusValue>
        </StatsItem>
        <StatsItem>
          <span>Views</span>
          <StatusValue>{stats.views}</StatusValue>
        </StatsItem>
        <StatsItem>
          <span>Likes</span>
          <StatusValue>{stats.likes}</StatusValue>
        </StatsItem>
      </StatsList>
    </>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
