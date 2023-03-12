function Resultinfo(props:
    { weight: number, bartype: number, name: string}) {

    return (
        <>
            <h3>{props.name}</h3>
            <div className='resultTextInfo'>
                <div>
                    <span>TOTAL WEIGHT</span>
                    <span>{props.weight} KG</span>
                </div>
                <div>
                    <span>PLATE WEIGHT</span>
                    <span>{props.weight - props.bartype} KG</span>
                </div>
            </div>
        </>
    )
  }
  
  export default Resultinfo