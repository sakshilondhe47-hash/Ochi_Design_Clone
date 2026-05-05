import { motion } from "framer-motion";
import React from "react";

function Cards() {
  return (
    <div className="border-b-2 border-zinc-700 pb-20 w-full h-screen bg-zinc-900 flex items-center px-32 gap-5">

      {/* Left Big Card */}
      <motion.div 
        whileHover="hover"
        initial="rest"
        animate="rest"
        className="cardcontainer h-[50vh] w-1/2"
      >
        <motion.div
          variants={{
            rest: { scale: 1 },
            hover: { scale: 1.02 }
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center overflow-hidden"
        >
          
          {/* Logo */}
          <motion.img
            variants={{
              rest: { scale: 1 },
              hover: { scale: 1.1 }
            }}
            transition={{ duration: 0.4 }}
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />

          {/* Button */}
          <motion.button
            variants={{
              rest: { y: 0, opacity: 0.8 },
              hover: { y: -5, opacity: 1 }
            }}
            transition={{ duration: 0.3 }}
            className="absolute px-5 py-1 border-2 rounded-full left-10 bottom-10"
          >
            &copy;2022
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Right Two Cards */}
      <div className="cardcontainer flex gap-5 w-1/2 h-[50vh]">

        {[ 
          {
            img: "https://ochi.design/wp-content/uploads/2022/04/logo002.svg",
            text: "RATINGS 5.0 ON CLUTCH"
          },
          {
            img: "https://ochi.design/wp-content/uploads/2022/04/logo003.png",
            text: "BUSINESS BOOTCAMP ALUMNI"
          }
        ].map((item, index) => (
          
          <motion.div
            key={index}
            whileHover={{
              y: -8,
              boxShadow: "0px 20px 40px rgba(0,0,0,0.4)"
            }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="card relative rounded-xl w-1/2 h-full bg-[#192826] flex items-center justify-center overflow-hidden"
          >

            <motion.img
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.4 }}
              className="w-32"
              src={item.img}
              alt=""
            />

            <motion.button
              initial={{ opacity: 0.7 }}
              whileHover={{ opacity: 1 }}
              className="absolute px-5 py-1 border-2 rounded-full left-10 bottom-10"
            >
              {item.text}
            </motion.button>

          </motion.div>
        ))}

      </div>
    </div>
  );
}

export default Cards;