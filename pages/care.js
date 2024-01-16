import data from '../data/data.json'


function Care () {
    return (
      <>
      <h1>Shrimp Care</h1>

      {Object.keys(data.parameters).map(type => {
         const {substrate, temperature, TDS, Water, pH, Kh, Gh} = data.parameters[type];
         return (
        <>

          <div className="paragraphFont">
            <br/>
            {type.charAt(0).toUpperCase() + type.slice(1)}:
            <br/>
            Substrate: {substrate}
            <br/>
            Temperature: {temperature}
            <br/>
            TDS: {TDS}
            <br/>
            Water: {Water}
            <br/>
            pH: {pH}
            <br/>
            kH: {Kh}
            <br/>
            gH: {Gh}
          </div>
          <br/>
          <br/>
        </>
         )
         })}
      </>
      
    )
  }
  
  export default Care