import PropTypes from 'prop-types';
import { TransactionHistoryItem } from './TransactionHistoryItem';
import {
  TableHead,
  TableHeadItem,
  TransactionHistoryRow,
} from './TransactionHictory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <>
      <TableHead>
        <TransactionHistoryRow>
          <TableHeadItem>TYPE</TableHeadItem>
          <TableHeadItem>AMOUNT</TableHeadItem>
          <TableHeadItem>CURRENCY</TableHeadItem>
        </TransactionHistoryRow>
      </TableHead>

      <tbody>
        {items.map(item => (
          <TransactionHistoryRow key={item.id}>
            <TransactionHistoryItem item={item} />
          </TransactionHistoryRow>
        ))}
      </tbody>
    </>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
