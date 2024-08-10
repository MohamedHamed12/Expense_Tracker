import React from 'react';

function TransactionItem({ transaction, deleteTransaction }) {
  const sign = transaction.amount < 0 ? '-' : '+';
  const amountClass = transaction.amount < 0 ? 'text-red-500' : 'text-green-500';

  return (
    <li className="flex justify-between bg-white shadow p-2 my-2 rounded">
      <span className="font-medium">{transaction.text}</span>
      <span className={`${amountClass} font-bold`}>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button
        onClick={() => deleteTransaction(transaction.id)}
        className="text-red-500 font-bold ml-4"
      >
        x
      </button>
    </li>
  );
}

export default TransactionItem;
