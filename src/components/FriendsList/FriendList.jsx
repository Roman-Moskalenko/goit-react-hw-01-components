import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { FriendListStyled } from './FriendList.styled';
import { FriendItemStyled } from './FriendListItem.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendListStyled>
      {friends.map(friend => (
        <FriendItemStyled key={friend.id}>
          <FriendListItem friend={friend} />
        </FriendItemStyled>
      ))}
    </FriendListStyled>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
