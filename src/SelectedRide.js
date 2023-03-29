

function SelectedRide({ name, converted_return_time, zone , accessCode}) {
    const { id, name: zoneName, color } = zone;
    


  return (
    <div id= {id}
      className="ride"
      style={{
        width: '260px',
      }}
    >
      <div
        className="zone-line"
        style={{
          backgroundColor: color,
        }} />
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
      
      <div className="zone-name" >
        {zoneName}
      </div>


      <div
        className="name"
        style={{
          color: '#656565',
          top: '25%',
          left: '50%',
          fontSize: '14px',
        }}
      >
        Return At
      </div>

      <div
        className="name"
        style={{
          top: '40%',
          left: '50%',
        }}
      >
        {converted_return_time}
      </div>
      <div
        className="name"
        style={{
          color: '#656565',
          top: '65%',
          left: '50%',
          fontSize: '14px',
        }}
      >
        Use Access Code
      </div>

      <div
        className="name"
        style={{
          top: '80%',
          left: '50%',
        }}
      >
        {accessCode}
      </div>
    </div>
  );
}

export default SelectedRide;