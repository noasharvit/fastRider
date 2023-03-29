

function SelectedRide({ name, converted_return_time, zone , accessCode}) {
    const { id, name: zoneName, color } = zone;
    


  return (
    <div id= {id}
      className="ride"
      style={{
        width: '260px',
        height: '170px',
        position: 'relative',
        backgroundColor: '#373737',
      }}
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
        className="name-when-selected"
        style={{
          position: 'absolute',
          color: '#ffffff',
          top: '5px',
          left: '5px',
          fontFamily: 'Open Sans, sans-serif',
          fontSize: '14px',
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
          fontSize: '14px',
        }}
      >
        {zoneName}
      </div>



      <div
        className="name"
        style={{
          position: 'absolute',
          color: '#656565',
          top: '25%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontFamily: 'Open Sans, sans-serif',
          fontSize: '14px',
        }}
      >
        return time
      </div>

      <div
        className="name"
        style={{
          position: 'absolute',
          color: '#ffffff',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontFamily: 'Open Sans, sans-serif',
          fontSize: '25px',
        }}
      >
        {converted_return_time}
      </div>
      <div
        className="name"
        style={{
          position: 'absolute',
          color: '#656565',
          top: '65%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontFamily: 'Open Sans, sans-serif',
          fontSize: '14px',
        }}
      >
        access code
      </div>

      <div
        className="name"
        style={{
          position: 'absolute',
          color: '#ffffff',
          top: '80%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontFamily: 'Open Sans, sans-serif',
          fontSize: '25px',
        }}
      >
        {accessCode}
      </div>

    </div>
  );
}

export default SelectedRide;