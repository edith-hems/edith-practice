import React from 'react';
import { motion } from 'framer-motion';
import { FiWifiOff } from 'react-icons/fi'; // A nice "Wi-Fi Off" icon

const OfflinePage = () => {
  return (
    // The main container, styled with Tailwind CSS
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-slate-100 text-slate-800">
      
      {/* Animated Icon */}
      <motion.div
        // Animate the icon to pulse
        animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <FiWifiOff className="text-7xl text-red-500 mb-6" />
      </motion.div>

      {/* Text Content */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-slate-700 mb-2">
          You Are Offline
        </h1>
        <p className="text-lg text-slate-500">
          Please check your internet connection.
        </p>
      </div>
    </div>
  );
};

export default OfflinePage;