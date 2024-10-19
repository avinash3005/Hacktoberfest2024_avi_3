// src/components/WhatsAppButton.js
import React from 'react';

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open('https://wa.me/1234567890', '_blank'); // Replace with your WhatsApp number
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-8 right-8 py-1 px-5 text-white rounded  shadow-lg hover:bg-green-600 transition duration-300 text-[32px] z-50"
    >
      <i className="fab fa-whatsapp"></i> 
    </button>
  );
};

export default WhatsAppButton;
