

export function parseRide(ride) {
    const { id: ride_id , name, remaining_tickets, return_time, zone } = ride;
    const { id, name: zoneName, color } = zone;
    const converted_return_time = convertTimeFormat(return_time);
    return {
      id: ride_id,
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

  function convertTimeFormat(timeString) {
    const dateObj = new Date(timeString);
    const hours = dateObj.getHours().toString().padStart(2, '0');
    const minutes = dateObj.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }
  

  export function isValidFormat(str) {
    const regex = /^JN-\d{4}-\d{4}-[A-Z]{2}$/;
    return regex.test(str);
  }

  export function isRideHasSelected (ride){
    return ride !== null;
  }
    
  