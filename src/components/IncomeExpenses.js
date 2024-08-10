import React from 'react';

function IncomeExpenses({ income, expense }) {
  return (
    <div className="flex justify-between ">
      <div className="w-1/2 text-center bg-green-100 p-2 rounded mr-2">
        <h3 className="text-lg font-semibold">Income</h3>
        {/* <p className="text-green-500 text-2xl">${income.toFixed(2)}</p> */}
      </div>
      <div className="w-1/2 text-center bg-red-100 p-2 rounded ml-2">
        <h3 className="text-lg font-semibold">Expense</h3>
        <p className="text-red-500 text-2xl">${expense.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default IncomeExpenses;
