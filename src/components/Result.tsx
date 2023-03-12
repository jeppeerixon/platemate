import { useRef } from 'react'
import * as logic from '../logic'
import Resultinfo from './Resultinfo';
import Barinfo from './Barinfo';

function Result( props:
  { weight: number, bartype: number, platetype: number, name: number,} ) {

    let press = useRef(0);

    function handleSlider(theDiv: string) {
      let parentDiv: HTMLDivElement = document.querySelector('.sliderDiv') as HTMLDivElement;
      let spanChildren: NodeListOf<HTMLSpanElement> = parentDiv?.querySelectorAll(':scope > span') as NodeListOf<HTMLSpanElement>;
      spanChildren?.forEach(element => {
        element.classList.remove('activeSlide')
      });
      let currentNr = theDiv.slice(-1);
      let currentDiv = "sliderDiv" + currentNr
      let activeSlider: HTMLSpanElement = document.getElementById(currentDiv) as HTMLSpanElement;
      activeSlider.classList.add('activeSlide')
    }

    function handleButtonClick(e: any) {
      let goToDiv: string ='#' + e.target.parentElement.id;
      if (goToDiv == '#resultsContainer') {
        goToDiv = '#' + e.target.id;
      }
      document.querySelector(goToDiv)?.scrollIntoView({behavior: 'smooth'});
      handleSlider(goToDiv)
    }

    function addClasses(index: number) {
      if (index < 4) {
        return "plate"+index*100
      }
      return "plate"+index
    }

    function addId(index: number) {
      return "DivNr"+index
    }
  
    let resultPlates = logic.countPlates(props.weight, props.bartype, logic.plateArray[props.platetype], logic.CHANGE_WEIGHT_RED_25)
    let resultList = resultPlates.map((index) => <div className={addClasses(index)} >{index}</div>)

    return (
      <>
        <div className='resultDiv example' id={addId(props.platetype)} onClick={(e) => handleButtonClick(e)}>
          
        <Resultinfo weight={props.weight} bartype={props.bartype} name={logic.plateTypeName[props.name]}/>

          <div className="platesDiv"> 
            {resultList.reverse()}
          </div>

        <Barinfo bartype={props.bartype} />        

        </div>
      </>
    )
  }
  
  export default Result