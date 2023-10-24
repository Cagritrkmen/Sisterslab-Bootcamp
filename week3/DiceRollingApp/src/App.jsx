import * as React from 'react';
import Dice from './components/Dice';
import DiceRolling from './components/DiceRolling';
import { useState } from 'react';
function App() {
  const options = [1, 2, 3, 4, 5, 6];

  const [currentStatus, setCurrentStatus] = useState(options[0]);

  return (

    <div className="outer-circle">
      <div className='inner-circle'>
      
        <Dice currentStatus={currentStatus} />
        <DiceRolling setCurrentStatus={setCurrentStatus} options={options} />
        
      </div>
    </div>
  )



}

export default App
