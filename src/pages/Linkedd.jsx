import React from 'react';

const Linkedd = () => {
  const columns = [
    {
      heading: 'CAR CARE & STYLING',
      texts: [
        'Cleaning',
'Vacuum Cleaners',
'Air Compressors',
'Duster & Microfibers',
'Scratch Removers',
'Spray Paints',
'Lubricants',
'Coolants',
'Filters',

      ],
    },
    {
      heading: 'CHROME ACCESSORIES',
      texts: [
        'Tail Light',
'Head Light',
'Side Mirror',
'Handle',
'Dicky',
'Door',
'Fog Light',
'Indicator',

      ],
    },
    {
      heading: 'LIGHTINING',
      texts: [
       ' Fog Lamps',
'Halogen Bulbs',
'LED Lights',
'HID Lights',
'Reflector Lights',
'Pillar Lights',
'DRL Lights',
'Bar Lights',
'Decorative Lights',

      ],
    },
    {
      heading: 'SAFETY & BREAKDOWN ASSISTANCE',
      texts: [
       ' Eemergency Tool Kits',
'Jumper Cable',
'Towing Ropes',
'Tyre Inflators',
'Tow Hooks',
'Tyre Puncture Kits',
'Central Locking',
'Tyre Lock',
'Steering Wheel Lock',

      ],
    },
  ];

  const columnStyle = {
    flex: 1,
    margin: '8px',
    padding: '16px',
    border: '1px solid #ccc',
    borderRadius: '8px',
  };

  const headingStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const textContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
  };

  const textStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '6px',
  };

  const arrowContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '6px',
    
  };

  const arrowStyle = {
    width: '8px',
    height: '8px',
    borderTop: '2px solid',
    borderRight: '2px solid',
    transform: 'rotate(45deg)',
    color: '#c51414',
  };

  return (
    <div style={{ display: 'flex' }}>
      {columns.map((column, index) => (
        <div key={index} style={columnStyle}>
          <div style={{ color: '#c51414', fontWeight: '800', fontFamily: 'Teko' }}>
          <div style={headingStyle}>{column.heading}</div></div>
          <div style={textContainerStyle}>
            {column.texts.map((text, idx) => (
              <div key={idx} style={textStyle}>
                {text}

                <div style={arrowContainerStyle}>
                {/* <div style={{ color: '#c51414', fontWeight: '800', fontFamily: 'Teko' }}> */}
                  <div style={arrowStyle}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Linkedd;
