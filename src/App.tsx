import { useState } from "react"
import MapComp from "./components/MapComp";


function App() {
  const [position,setPosition] = useState<[number,number] | null>(null);
  const [userPos,setUserPos] = useState<{long:number,lat:number}>({long:0,lat:0});
  const findMe = ()=>{
    navigator.geolocation.getCurrentPosition(
      (position:GeolocationPosition)=>{
      const long = position.coords.longitude;
      const lat = position.coords.latitude;
      setPosition([lat,long]);
    },
    ()=>{alert('Your browser is not supporting!')}
  )
  }

  const goUserPos = ()=>{
    if(isNaN(userPos.long) || isNaN(userPos.lat)){
     return alert('Your values is invalid')!
    }
    setPosition([userPos.lat,userPos.long]);
  }
  return (
    <>
    <button className="btn" style={{top:'5px'}} onClick={findMe}>Where am i?</button>
    <form onSubmit={(e)=>{e.preventDefault();goUserPos()}} className="go_loc">
      <div>
        <div>Latitude</div>
        <input value={userPos.long} onChange={(e)=>{setUserPos({...userPos,long:parseFloat(e.target.value)})}} type="number" placeholder="21.902300" />
      </div>
      <div>
        <div>Longitude</div>
        <input value={userPos.lat} onChange={(e)=>{setUserPos({...userPos,lat:parseFloat(e.target.value)})}} type="number" placeholder="21.902300"/>
      </div>
      <div>
      <button type="submit" className="btn" style={{position:'relative',padding:'.8em 3em',borderRadius:'3px'}}> Go </button>
      </div>
    </form>
      <MapComp position={position}/>
    </>
  )
}

export default App
