import React, {useState} from "react";
import './App.css';

function App() {
  const [weight, setWeight] = useState(80)
  const [bottles, setBottles] = useState(0)
  const [time, setTime] = useState(0)
  const [gender, setGender] = useState("male")
  const [result, setResult] = useState()

  function calculateBAC(e){
    e.preventDefault();
    let liters = bottles * 0.33
    let grams = liters * 8 * 4.5
    let burning = weight/10
    let grams_left = grams - (burning * time)
    let bac = 0
    if(gender == "male"){
      bac = grams_left / (weight*0.7)
    }else{
      bac = grams_left / (weight*0.6)
    }
    if(bac < 0){ //result doesn't go below 0
      bac = 0
    }
    setResult("Your BAC is " + bac.toFixed(2))
  }

  return (
    <div>
      <h2>Calculating blood alcohol level (BAC)</h2>
      <form onSubmit={calculateBAC}>
      <div>
        <label>Weight</label>
        <input type="number" value={weight} onChange={e => setWeight(e.target.value)}></input>
      </div>
      <div>
        <label>Bottles</label>
        <input type="number" value={bottles} onChange={e => setBottles(e.target.value)}></input>
      </div>
      <div>
        <label>Time</label>
        <input type="number" value={time} onChange={e => setTime(e.target.value)}></input>
      </div>
      <div>
        <label>Gender</label>
        <input type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)}></input>
        <label>Male</label>
        <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)}></input>
        <label>Female</label>
      </div>
      <div>
        <output>{result}</output>
      </div>
      <button>Calculate</button>
      </form>
    </div>
  );
}

export default App;
