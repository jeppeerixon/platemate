function Resultinfo(props:
    { weight: number, bartype: number, name: string}) {

    return (
        <>
            <h2>{props.name}</h2>
            <div className='resultTextInfo'>
                <div>
                    <span><strong>PLATES</strong></span>
                    <span>{props.weight - props.bartype} KG</span>
                </div>
                <div>
                    <span><strong>BAR</strong></span>
                    <span>{props.bartype} KG</span>
                </div>
                <div>
                    <span><strong>TOTAL</strong></span>
                    <span>{props.weight} KG</span>
                </div>
            </div>
        </>
    )
  }
  
  export default Resultinfo