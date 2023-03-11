function Resultinfo(props:
    { weight: number, bartype: number, name: string}) {

    return (
        <>
            <h3>{props.name}</h3>
            <div className='resultTextInfo'>
                <span>Totalvikt: {props.weight} KG</span>
                <span>Barvikt: {props.bartype} KG</span>
            </div>
        </>
    )
  }
  
  export default Resultinfo