import React, {useState} from 'react';
import Ride from './Ride';
import './Ride.css';



export default function Rides () {
  const [rides, setRides] = useState([]);
  React.useEffect(() => {
    fetch('http://fast-rider.herokuapp.com/api/v1/rides?token=433898df4a3e992b8411004109e4d574a90695e39e')
      .then(response => response.json())
      .then(data => setRides(data));
  }, []);

  function parseRide(ride) {
    const { name, remaining_tickets, return_time, zone } = ride;
    const { id, name: zoneName, color } = zone;

    return {
      name,
      remaining_tickets,
      return_time,
      zone: {
        id,
        name: zoneName,
        color,
      },
    };
  }



  return (
    <div className="rides-container">
    <h1>Rides</h1>
    <div className="rides-grid">
        {rides.map(ride => (
          <Ride 
          key={ride.id} 
          {...parseRide(ride)} 
        />        
        ))}
    </div>
  </div>
  );
  
}

