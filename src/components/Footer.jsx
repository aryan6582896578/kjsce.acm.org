import React from 'react';

const Footer = () => {
  return (
    <footer
      id="contact-us"
      className="bg-gradient-to-b from-[#5eb5e0] to-black text-white py-16 px-6 sm:px-0 rounded-t-3xl"
      style={{
        width: '70vw',
        margin: '0 auto', // Center the footer horizontally
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Adjusted the height of the logo */}
        <div className="flex items-center justify-center mb-4">
          <img className="h-40" src="logo_withoutbg.png" alt="" /> {/* Reduced height */}
        </div>
        {/* Text content */}
        <div className="text-center">text goes here</div>
        {/* Footer text */}
        <div className="text-center text-white font-bold">
          <p>Made with ❤️ by ACM-KJSCE</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
