// src/TableComponents.js
import React, { useState } from 'react';

// 1
export const DisplayTab = ({ table }) => {
  return (
    <ul>
      {table.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

//  2
export const DisplayTabWithIndex = ({ table }) => {
  return (
    <ul>
      {table.map((item, index) => (
        <li key={index}>{`Element ${index + 1} is: ${item}`}</li>
      ))}
    </ul>
  );
};

//3
export const DisplayTabWithClick = ({ table }) => {
  const [tableData, setTableData] = useState(table);

  const handleItemClick = (index) => {
    const updatedTable = [...tableData];
    updatedTable.splice(index, 1);
    setTableData(updatedTable);
  };

  return (
    <ul>
      {tableData.map((item, index) => (
        <li key={index} onClick={() => handleItemClick(index)}>
          {`Element ${index + 1} is: ${item}`}
        </li>
      ))}
    </ul>
  );
};
