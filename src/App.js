
import './App.css';
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material';
import { useState } from 'react';

function App() {

//state creation

const [principle,setPrincipal]=useState(0)
const [year,setYear]=useState(0)
const [rate,setRate]=useState(0)
const [interest,setInterest]=useState(0)
console.log(principle);
console.log(rate);
console.log(year);

const Calculate=(e)=>{
  let output=principle*year*rate/100
  console.log(output);
  setInterest(output)
 
}
const Reset=(e)=>{
  setInterest(0)
  setRate(0)
  setYear(0)
  setPrincipal(0)

}

  return (
    <div className="App">
      <header className="App-header">
        <div className="conatiner">
          <div className="head">

          <h1>Simple Interest</h1>
          <p>Simple interest is the interest charge on borrowing that's calculated using an original principal amount only and an interest rate that never changes</p>

          </div>
          
          <div className="card">

          <h3 className='symbol'>&#8377;{interest}</h3>
          <p id='para'>YOUR INTERST IS:</p>
          

        </div>
<br />
        <div className="input">
<TextField  onChange={e=>setPrincipal(e.target.value)} value={principle} id="filled-basic" label="Principle Amount" variant="filled" /> <br />
<TextField onChange={e=>setRate(e.target.value)} value={rate} id="filled-basic" label="Rate Of Interst" variant="filled" /><br />
<TextField onChange={e=>setYear(e.target.value)} value={year}  id="filled-basic" label="Number Of Years" variant="filled" /> <br />

<Button onClick={Calculate} variant="outlined" color="primary">
CALCULATE
</Button> <br />
<Button onClick={Reset} variant="outlined" color="error">
  RESET
</Button> <br />

</div>

        </div>

        
      </header>
    </div>
  );
}

export default App;
