import styled from 'styled-components';

export const TransactionHictoryContainer = styled.table`
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 8px;
  border-collapse: collapse;
  width: 600px;
  border-radius: 14px;
  background: linear-gradient(45deg, #f0f0f0, #cacaca);
  box-shadow: 12px -12px 24px #bebebe, -12px 12px 24px #ffffff;
`;

export const TableHead = styled.thead`
  background-color: #00bcd5;
`;

export const TableHeadItem = styled.th`
  border-right: 1px solid;
  border-color: #e5ebf3;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  width: calc(100% / 3);
  text-align: center;
  color: white;
  font-size: 15px;
  letter-spacing: 1.5px;
`;

export const TransactionHistoryRow = styled.tr`
  border: 1px solid;
  border-color: #eaf2f2;
  &:not(:first-child):nth-last-child(2n + 1) {
    background-color: #e5ebf3;
  }
`;

export const TransactionHistoryColumn = styled.td`
  border-right: 1px solid;
  border-color: #eaf2f2;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 8px;
  padding-right: 8px;
  width: calc(100% / 3);
  color: #89898f;
  font-size: 12;
  text-align: center;
  &:first-child {
    padding-left: 64px;
    text-align: left;
  }
`;
