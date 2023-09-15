import {
  TableData,
  TransactionHistoryTable,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryTable>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <TableData>{type}</TableData>
              <TableData>{amount}</TableData>
              <TableData>{currency}</TableData>
            </tr>
          );
        })}
      </tbody>
    </TransactionHistoryTable>
  );
};
