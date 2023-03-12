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