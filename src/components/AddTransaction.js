import React, { useState } from 'react';

function AddTransaction({ addTransaction }) {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !amount) return;

    addTransaction({
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: parseFloat(amount),
    });

    setText('');
    setAmount('');
  };

  return (
    <div className="my-4">
      <h3 className="text-xl font-semibold">Add New Transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="my-2">
          <label htmlFor="text" className="block text-sm font-semibold">Text</label>
          <input
            type="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter text..."
          />
        </div>
        <div className="my-2">
          <label htmlFor="amount" className="block text-sm font-semibold">Amount <small>(negative - expense, positive - income)</small></label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter amount..."
          />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded mt-2">Add Transaction</button>
      </form>
    </div>
  );
}

export default AddTransaction;
