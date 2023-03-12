function Barinfo(props:
    { bartype: number}) {

    return (
        <>
            <div className='barInfo'>
                {props.bartype}
            </div>
        </>
    )
  }
  
  export default Barinfo

{/*

.barInfo {
      background-color: LightGray;
      width: 70px;
      height: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-right: 1rem;
      margin-bottom: 1.5rem;  
      transform: rotate(-90deg);
      box-shadow: 0px 0px 10px 1px rgba($color: black, $alpha: 0.2);
      border: 1px solid black;
      color: black;
    }

*/}