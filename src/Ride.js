import greyClockLogo from './logos/greyClockLogo.png';
import greyTicketLogo from './logos/greyTicketLogo.png';

function Ride({ name, remaining_tickets, converted_return_time, zone , selected, onSelect}) {
    const { id, name: zoneName, color } = zone;
    
  

  
    const handleClick = () => {
        onSelect(id);
      };
 
  const selectedStyle = selected ? { backgroundColor: color } : {backgroundColor: '#373737'};

  return (
    <div id= {id}
      className="ride"
      style={{
        ...selectedStyle,
      }}
      onClick={handleClick}>

      <div
        className="zone-line"
        style={{
          backgroundColor: color,
        }}
      />

      <div className="name" >
        {name}
      </div>

      <div className="zone-name" >
        {zoneName}
      </div>

      <div className="remaining-tickets">
      <img  src={greyTicketLogo}
            alt="Logo"
            style={{ height: '16px', marginRight: '5px' }}/>
        <span>{remaining_tickets}</span>
      </div>

      <div className="return-time" >
      <img  src={greyClockLogo}
            alt="Logo"
            style={{ height: '16px', marginRight: '5px' }} 
        />
        <span>{converted_return_time}</span>
        </div>
    </div>
  );
}

export default Ride;