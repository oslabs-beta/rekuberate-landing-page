import React from 'react';
import '../CSS/footer.css';

export default function Footer() {
  return (
    <div className='footer'>
      <p className='footerText'>
        Built with{' '}
        <p id='heart' className='bottomNames'>
          ♥
        </p>{' '}
        by{' '}
        <p id='hunter' className='bottomNames'>
          Hunter
        </p>
        ,{' '}
        <p id='kai' className='bottomNames'>
          Kai
        </p>
        ,{' '}
        <p id='thad' className='bottomNames'>
          Thad
        </p>
        ,{' '}
        <p id='fab' className='bottomNames'>
          Fabrizzio
        </p>
        , and{' '}
        <p id='kevin' className='bottomNames'>
          Kevin
        </p>
        .
      </p>
      <p className='footerText'>© 2023</p>
    </div>
  );
}
