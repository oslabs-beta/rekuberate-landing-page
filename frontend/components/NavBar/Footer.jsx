import React from 'react';
import '../CSS/footer.css';

export default function Footer() {
  return (
    <div className='footer'>
      <p className='footerLinks'>
        <a style={{ color: 'inherit' }} href='https://www.linkedin.com/company/rekuberate-open-source/'>
          <i className='fa-brands fa-linkedin'></i>
        </a>{' '}
        <a style={{ color: 'inherit' }} href='https://twitter.com/ReKuberateOS'>
          <i className='fa-brands fa-twitter'></i>
        </a>{' '}
        <a style={{ color: 'inherit' }} href='https://github.com/oslabs-beta/ReKuberate'>
          <i class='fa-brands fa-github'></i>
        </a>
      </p>
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
        </p>{' '}
        © 2023
      </p>
    </div>
  );
}
