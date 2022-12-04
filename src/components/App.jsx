import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendsList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { StatisticsContainer } from 'components/Statistics/Statistics.styled';
import { ProfileContainer } from 'components/Profile/Profile.styled';
import { FriendContainer } from 'components/FriendsList/FriendList.styled';
import { TransactionHictoryContainer } from './TransactionHistory/TransactionHictory.styled';
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import { GlobalStyle, Container } from 'style/Global.styled';

export const App = () => {
  return (
    <>
      <Container>
        <ProfileContainer>
          <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />
        </ProfileContainer>
        <StatisticsContainer>
          <Statistics title="Upload stats" stats={data} />
        </StatisticsContainer>
        <FriendContainer>
          <FriendList friends={friends} />
        </FriendContainer>
        <TransactionHictoryContainer>
          <TransactionHistory items={transactions} />
        </TransactionHictoryContainer>
        <GlobalStyle />
      </Container>
    </>
  );
};
