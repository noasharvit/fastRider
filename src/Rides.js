import React, {useState} from 'react';
import Ride from './Ride';
import SelectedRide from './SelectedRide';
import './Ride.css';
import Info from './Info';
import ticketLogo from './logos/ticketLogo.png';
import clockLogo from './logos/clockLogo.png';
import arrowLogo from './logos/arrowLogo.png';
import vLogo from './logos/vLogo.png';
import { postSubmition } from './postRequest';
import { parseRide, isValidFormat, isRideHasSelected } from './stringParsingAndCoverting';

export default function Rides () {
  const [rides, setRides] = useState([]);
  const [selectedRideId, setSelectedRideId] = useState(null);
  const [pin, setPin] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [accessCode, setAccessCode] = useState(null);
  


  React.useEffect(() => {
    fetch('http://fast-rider.herokuapp.com/api/v1/rides?token=433898df4a3e992b8411004109e4d574a90695e39e')
      .then(response => response.json())
      .then(data => setRides(data));
  }, []);


  const handleRideSelect = (id) => {
    setSelectedRideId(id);  
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if(isValidFormat(pin) && isRideHasSelected(selectedRideId)){
        postSubmition(pin, selectedRideId)
        .then(json => {
            setAccessCode(json.access_code);
            setIsSubmit(true);
            })
        .catch(error => console.error(error));
    }
    else{
        alert("#PIN code in invalid! or Ride hasn't been selected..");
    }
  };

  const handlePinChange = (event) => {
    setPin(event.target.value);  
  };

  function findSelectedRideById(id){
    return rides.find( ride => ride.id === id);
  } 

  const selectedRideObject = findSelectedRideById(selectedRideId);

  return (
    <div className="rides-container">
    <h1 className="jungle-title ">
        The Jungle FastRider service</h1>

    {isSubmit
    //if submit had been pressed 
        ?
    <>
        <Info
        src={vLogo}
        text="Thank you for using The Jungle FastRider ticket system - your access code is now ready!"
        /> 

        <SelectedRide 
            key={ selectedRideObject.id} 
            {...parseRide(selectedRideObject)}
            accessCode = {accessCode}
            />  
    </>
    :
// default page 

        <>
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
        <div className="input-section"
        >
        <input
            type="text"
            value={pin}
            onChange={handlePinChange}
            style={{ width: "75%", height: "100%" }}
            placeholder="  #PIN"
        />
        <button className="submit"
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
            </>
        } 
  </div>
  );
}

