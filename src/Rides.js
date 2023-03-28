import React, {useState} from 'react';
import Ride from './Ride';
import './Ride.css';
import Info from './Info';
import ticketLogo from './logos/ticketLogo.png';
import clockLogo from './logos/clockLogo.png';
import arrowLogo from './logos/arrowLogo.png';


export default function Rides () {
  const [rides, setRides] = useState([]);
  const [selectedRideId, setSelectedRideId] = useState(null);
  const [pin, setPin] = useState("");
  const token = "433898df4a3e992b8411004109e4d574a90695e39e";



//   const pin = "JN-8080-8080-QQ";
//   const ride_id = 4;
  
  
  
    function postSubmition(pin, ride_id) {
        const url = "http://fast-rider.herokuapp.com/api/v1/tickets";
  
        const data = new URLSearchParams();
        data.append("pin", pin);
        data.append("ride_id", ride_id);
        data.append("token", token);
        
        const options = {
            method: "POST",
            headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "application/json"
            },
            body: data
        };
        
        fetch(url, options)
            .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
            })
            .then(json => console.log(json))
            .catch(error => console.error(error));

    }

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

  function isValidFormat(str) {
    const regex = /^JN-\d{4}-\d{4}-[A-Z]{2}$/;
    return regex.test(str);
  }

  const handleRideSelect = (id) => {
    setSelectedRideId(id);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    isValidFormat(pin)? postSubmition(pin, selectedRideId) : alert("#PIN code in invalid! "); ; 
    // Implement the handle submit function here
    console.log("Pin: ", pin);
    console.log("selectedRideId: "+ selectedRideId);
  };
  const handlePinChange = (event) => {
    setPin(event.target.value);
  };


  return (
    <div className="rides-container">
    <h1
    style={{
        color: '#ffffff',
        fontSize: '30px',
        fontFamily: 'Open Sans, sans-serif',
      }}>
        The JungleTM FastRider service</h1>

        <div className="info-grid"  style={{ display: 'flex' }}>
        <Info
          src={ticketLogo}
          text="Enter your park ticket #PIN number, then select the desire ride while noting the stated return time."
        />
        <Info
          src={arrowLogo}
          text="press 'submit' to confirm and retrieve your access code."
        />
        <Info
          src={clockLogo}
          text="when the time comes, use the special FastRider line to cut out a considerable wait time."
        />
      </div>

  <div style={{ display: "flex", justifyContent: "center", alignItems: "center" , marginBottom: "20px"}}>
    <form onSubmit={handleSubmit} style={{ width: "750px" }}>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "30px",
        marginTop: "20px"
      }}
    >
      <input
        type="text"
        value={pin}
        onChange={handlePinChange}
        style={{ width: "75%", height: "100%" }}
        placeholder="Enter your park ticket #PIN number"
      />
      <button
        style={{
          width: "25%",
          height: "100%" ,
          backgroundColor: "#373737",
          color: "#ffffff",
          borderRadius: "0 5px 5px 0",
          border: "none",
          cursor: "pointer"
        }}
        onClick={() => console.log("Submit clicked")}
      >
        Submit
      </button>
    </div>
  </form>
</div>



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

