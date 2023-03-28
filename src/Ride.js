import greyClockLogo from './logos/greyClockLogo.png';
import greyTicketLogo from './logos/greyTicketLogo.png';
import greyArrowLogo from './logos/greyArrowLogo.png';

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
        width: '170px',
        height: '170px',
        position: 'relative',
        ...selectedStyle,
      }}
      onClick={handleClick}
    >
      <div
        className="zone-line"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '5px',
          backgroundColor: color,
        }}
      />
      <div
        className="name"
        style={{
          position: 'absolute',
          color: '#ffffff',
          display: 'flex',
          fontSize: '25px',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          fontFamily: 'Open Sans, sans-serif',
        }}
      >
        {name}
      </div>
      <div
        className="zone-name"
        style={{
          position: 'absolute',
          top: '5px',
          right: '5px',
          color: '#656565',
          fontFamily: 'Open Sans, sans-serif',
          fontSize: '15px',
        }}
      >
        {zoneName}
      </div>
      <div
        className="remaining-tickets"
        style={{
          position: 'absolute',
          bottom: '5px',
          right: '5px',
          fontSize: '13px',
          color: '#656565',
          display: 'flex',
          justifyContent: 'flex-end',
          fontFamily: 'Open Sans, sans-serif',
        }}
      >
      <img
            src={greyTicketLogo}
            alt="Logo"
            style={{ height: '16px', marginRight: '5px' }} 
        />
        <span>{remaining_tickets}</span>
      </div>
      <div
        className="return-time"
        style={{
          position: 'absolute',
          bottom: '5px',
          left: '5px',
          fontSize: '13px',
          color: '#656565',
          display: 'flex',
          justifyContent: 'flex-start',
          fontFamily: 'Open Sans, sans-serif',
        }}
      >
      <img
            src={greyClockLogo}
            alt="Logo"
            style={{ height: '16px', marginRight: '5px' }} 
        />
        <span>{converted_return_time}</span>

      </div>
    </div>
  );
}

export default Ride;