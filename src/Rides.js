import React, {useState} from 'react';
import Ride from './Ride';
import './Ride.css';



export default function Rides () {
  const [rides, setRides] = useState([]);
  const [selectedRideId, setSelectedRideId] = useState(null);

  React.useEffect(() => {
    fetch('http://fast-rider.herokuapp.com/api/v1/rides?token=433898df4a3e992b8411004109e4d574a90695e39e')
      .then(response => response.json())
      .then(data => setRides(data));
  }, []);

  function convertTimeFormat(timeString) {
    const dateObj = new Date(timeString);
    const hours = dateObj.getHours().toString().padStart(2, '0');
    const minutes = dateObj.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }
  

  function parseRide(ride) {
    const { name, remaining_tickets, return_time, zone } = ride;
    const { id, name: zoneName, color } = zone;
    const converted_return_time = convertTimeFormat(return_time);
    return {
      name,
      remaining_tickets,
      converted_return_time,
      zone: {
        id,
        name: zoneName,
        color,
      },
    };
  }

  const handleRideSelect = (id) => {
    setSelectedRideId(id);
  };

  return (
    <div className="rides-container">
    <h1>Rides</h1>
    <div className="rides-grid">
        {rides.map(ride => (
          <Ride 
          key={ride.id} 
          {...parseRide(ride)}
          selected={selectedRideId === ride.id}
          onSelect={() => handleRideSelect(ride.id)}
        />        
        ))}
    </div>
  </div>
  );
  
}

