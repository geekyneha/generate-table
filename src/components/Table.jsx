import React, { useState } from 'react';

const Table = () => {
  const [inputValue, setInputValue] = useState('');
  const [itable, setTable] = useState([]);

  const generateTable = (num) => {
    setInputValue(num); 
    num = parseInt(num); 
    if (!isNaN(num)) {
      const tableValues = [];
      for (let i = 1; i <= 10; i++) {
        let table = num * i;
        console.log(table);
        tableValues.push(table);
      }
      setTable(tableValues);
    }
  };

  return (
    <div>
      <input
        type='number'
        placeholder='enter number'
        value={inputValue}
        onChange={(e) => generateTable(e.target.value)} 
      />
      <table>
        <thead>
          <tr>
            <th>Table</th>
          </tr>
        </thead>
        <tbody>
          {itable.map((value, index) => (
            <tr key={index}>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
