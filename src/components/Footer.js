import React from 'react';

const Footer = () => {
  return (
    <div className='footer'>
      <p> 
        &copy;{(new Date().getFullYear())} FINDUR CITY | All rights reserved | Terms Of Service | Privacy
      </p>
    </div>
  );
};
export default Footer;
