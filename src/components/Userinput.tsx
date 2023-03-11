import { useState } from "react"
import Result from "./Result";
import ReactDOM, { render } from "react-dom";
import { plateArray } from '../logic'
import Slider from "./Slider";
import Hero from "./Hero";

function Userinput() {

  interface userWeightInput {
    weight?: number,
    bartype?: number,
  }
  
  const [userWeight, setUserWeight] = useState<userWeightInput>();

  function hideAndShow() {
    let heroDiv: HTMLDivElement = document.querySelector('.hero') as HTMLDivElement;
    let sliderDiv: HTMLDivElement = document.querySelector('.sliderDiv') as HTMLDivElement;
    heroDiv.classList.add('hide');
    sliderDiv.classList.remove('hide');
  }

  function handleClick(e: React.FormEvent<EventTarget>) {
    e.preventDefault();
    hideAndShow();
    let weightNumber: number = userWeight?.weight || 0;
    let barNumber: number = userWeight?.bartype || 0;
    ReactDOM.render( 
      plateArray.map((index, nr) => <Result weight={weightNumber} bartype={barNumber} platetype={nr} name={nr}/>),
    (document.getElementById('resultsContainer') as HTMLDivElement)
    )

  }

    return (
      <>
        <Hero />

        <form onSubmit={handleClick}>
          <div>
            <label>
                TOTAL WEIGHT:
                <input id="weight" placeholder="KG" type="number" min="20" max="500" name="weight" value={userWeight?.weight || ''} onChange={(e) => setUserWeight({...userWeight, [e.target.name]: Number(e.target.value)})}/>
            </label>

            <select  name="bartype" id="bartype" value={userWeight?.bartype || ''} onChange={(e) => setUserWeight({...userWeight, [e.target.name]: Number(e.target.value)})}>
              <option value="00">Type of bar</option>
              <option value="15">15kg</option>
              <option value="20">20kg</option>
            </select>
          </div>

          <button>ENTER</button>

        </form>

        <div id="resultsContainer">
        </div>       

        <Slider /> 

      </>
    )
  }
  
  export default Userinput