import React, {useState} from 'react';


const initialLocation = {
    latitude: null,
    longitude: null,
    accuracy: null
}

const GeoLocation = () => {
    const [location, setLocation] = useState(initialLocation);
    const [error, setError] = useState(false); 
    
    let options = {
        enableHighAccuracy: true,
        timeout: 5000, 
        maximumAge: 0 
    };

    const success = (position) =>{
      let coords = position.coords;
      setError(null);
      setLocation({
        latitude: coords.latitude,
        longitude: coords.longitude,
        accuracy: coords.accuracy
      })

    };

    const err = () =>{
       setError("User didn't allow the usage of GeoLocation");
    };
    
    navigator.geolocation.getCurrentPosition(success, err, options);
    return ( 
      <section id="section8">
        <div>
            <h2>GeoLocation</h2>
            {!error &&
            <div className='geo-ul'>
             <ul>
                <li>Latitude: <b>{location.latitude}</b></li>
                <li>Longitude: <b>{location.longitude}</b></li>
                <li>Accuracy: <b>{location.accuracy}</b></li>
             </ul>
             <a href={`https://www.google.com/maps/@${location.latitude},${location.longitude},20z`} target="_blank" rel="noopener noreferrer">My Location in Google Maps</a>
             </div>
             }
            {error && <p>{error}</p>}
        </div>
        </section>
     );
}
 
export default GeoLocation;