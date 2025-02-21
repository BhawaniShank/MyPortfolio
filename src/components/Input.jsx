import React, { useState } from "react";
import { motion } from "framer-motion";

const Input = ({ type, label,errors, ...props  }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full flex-col flex gap-2 ">
      <motion.label
        initial={{ y: 0 }}
        animate={{ y: isOpen ? -10 : 10, x: isOpen ? 5 : 0 }}
        transition={{ duration: 0.2 }}
        htmlFor={label}
        className={`absolute left-2 bg-[#0e141b] px-2 text-sm ${errors ? 'text-red-500' : 'text-gray-500'}`}
      >
        {label}
      </motion.label>
      <input
        id={label}
        type={type}
        {...props}
        onFocus={() => setIsOpen(true)}
        onBlur={(e) => setIsOpen(e.target.value !== "")}
        className={`w-full outline-none border ${errors ? 'border-red-500 focus:border-red-500' : 'border-gray-500 focus:border-blue-600'} p-2 rounded-md`}
      />
        {errors && <p className='text-red-500 text-sm'>{errors.message}</p>}
    </div>
  );
};

export default Input;
