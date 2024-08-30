import React from 'react';
import { motion } from 'framer-motion';
import { IoClose } from "react-icons/io5";


type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children } : ModalProps) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose} // Close modal on backdrop click
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="relative bg-gray-100 p-6 border-black/5 rounded-lg shadow-lg z-10 dark:text-white dark:bg-gray-700"
          >
            <IoClose className="bg-white text-gray-700 borderBlack dark:bg-white/10 dark:text-white/60 absolute top-0.5 right-0.5 p-1 text-3xl sm:hidden rounded-full" onClick={onClose} />
            {children}
          </motion.div>
        </div>
      )}
    </>
  );
  // return (
  //   <>
  //     {isOpen && (
  //       <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
  //         <motion.div
  //           initial={{ opacity: 0, scale: 0.8 }}
  //           animate={{ opacity: 1, scale: 1 }}
  //           exit={{ opacity: 0, scale: 0.8 }}
  //           transition={{ duration: 0.3 }}
  //           className="bg-white p-6 rounded-lg shadow-lg relative"
  //         >
  //           <button
  //             onClick={onClose}
  //             className="absolute top-2 right-2 text-gray-700"
  //           >
  //             Close
  //           </button>
  //           {children}
  //         </motion.div>
  //       </div>
  //     )}
  //   </>
  // );
};

export default Modal;
