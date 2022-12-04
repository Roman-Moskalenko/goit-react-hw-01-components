import PropTypes from 'prop-types';
import { TransactionHistoryColumn } from './TransactionHictory.styled';

export const TransactionHistoryItem = ({
  item: { type, amount, currency },
}) => {
  return (
    <>
      <TransactionHistoryColumn>{type}</TransactionHistoryColumn>
      <TransactionHistoryColumn>{amount}</TransactionHistoryColumn>
      <TransactionHistoryColumn>{currency}</TransactionHistoryColumn>
    </>
  );
};

TransactionHistoryItem.propTypes = {
  item: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};
