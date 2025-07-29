import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNetworkStatus } from './hooks/useNetworkStatus';
import Hems from './screens/Hems';
import OfflinePage from './Components/Network/OfflinePage';


// Define the animation variants for the page transition
const pageVariants = {
  initial: {
    opacity: 0,
    y: "-100vh"
  },
  in: {
    opacity: 1,
    y: 0
  },
  out: {
    opacity: 0,
    y: "100vh"
  }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.8
};

function App() {
  const isOnline = useNetworkStatus();

  return (
    // AnimatePresence will manage the enter/exit animations
    // mode="wait" ensures one component animates out before the next one animates in
    <AnimatePresence mode="wait">
      {isOnline ? (
        // When online, show the main app content with a motion wrapper
        <motion.div
          key="online" // A unique key is crucial for AnimatePresence
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          <Hems />
        </motion.div>
      ) : (
        // When offline, show the offline page with a motion wrapper
        <motion.div
          key="offline" // A unique key is crucial
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          <OfflinePage />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;