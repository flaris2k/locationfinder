import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet"
import 'leaflet/dist/leaflet.css';
type props = {
    position:[number,number] | null
}
const MapComp = ({position}:props) => {

    function SetCenter({center}:{center:[number,number]}){
        const map = useMap();
        map.setView(center,20);
        return null;
    }
  return (
    <MapContainer center={position === null ? [39.9208,32.8539] : position} zoom={13} style={{height:'100vh',width:'100vw'}}>
        <SetCenter center={position === null ? [39.9208,32.8539] : position}/>
        <TileLayer 
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        {
            position !== null && <Marker position={position}>
                <Popup>{position[0]} - {position[1]}</Popup>
            </Marker>
        }

    </MapContainer>
  )
}

export default MapComp