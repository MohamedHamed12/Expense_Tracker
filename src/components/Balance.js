import React from 'react';

function Balance({ balance }) {
  return (
    <div className="my-4 text-center">
      <h2 className="text-xl font-semibold">Your Balance</h2>
      <h3 className="text-3xl font-bold">${balance.toFixed(2)}</h3>
    </div>
  );
}

export default Balance;
