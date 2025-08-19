import React, { useState } from "react";

const FullScreenModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 300); // 动画持续时间 300ms
  };

  return (
    <div>
      <button
        onClick={openModal}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Open Modal
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center backdrop-blur-sm">
          <div
            className={`bg-white p-8 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out ${
              isOpen ? "scale-50 opacity-10" : "scale-100 opacity-100"
            }`}
          >
            <h2 className="text-2xl font-bold mb-4">Full Screen Modal</h2>
            <p className="text-gray-600 mb-4">
              This is a full screen modal with animation.
            </p>
            <button
              onClick={closeModal}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FullScreenModal;
