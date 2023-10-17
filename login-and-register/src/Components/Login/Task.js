
import React, { useState } from 'react';
import './Task.css';

function Task() {
  const [leftData, setLeftData] = useState(['item1', 'item2', 'item3']);
  const [rightData, setRightData] = useState([]);

  const handleMoveToRight = (item) => {
    setRightData([...rightData, item]);
    setLeftData(leftData.filter((val) => val !== item));
  };

  const handleMoveToLeft = (item) => {
    setLeftData([...leftData, item]);
    setRightData(rightData.filter((val) => val !== item));
  };

  return (
    <div className="task">
      <div>
        <h2>Left Items</h2>
        <ul>
          {leftData.map((item, index) => (
            <div key={index}>
              <li>
                {item}
              </li>
              <button onClick={() => handleMoveToRight(item)}>Move Right</button>
            </div>
          ))}
        </ul>
      </div>

      <div>
        <h2>Right Items</h2>
        <ul>
          {rightData.map((item, index) => (
            <div key={index}>
              <li>
                {item}
              </li>
              <button onClick={() => handleMoveToLeft(item)}>Move Left</button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Task;
