// src/Modal.js
import React from 'react';

export default function Modal({ isOpen, onClose, message }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-5 rounded shadow-lg max-w-sm w-full">
        <p>{message}</p>
        <button
          onClick={onClose}
          className="mt-4 bg-[#233942] text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
}
