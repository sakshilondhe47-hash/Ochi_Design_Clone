import { motion } from "framer-motion";
import React from "react";

function Featured() {
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-2 border-zinc-700 pb-20">
        <h1 className='text-7xl font-["Neue_Montreal"] tracking-tight'>
          Featured projects
        </h1>
      </div>

      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">

          <motion.div
            whileHover={{
              y: -15,
              scale: 1.03,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="cardcontainer relative w-1/2 h-[75vh]"
          >
            <div className="card w-full h-full rounded-xl overflow-hidden shadow-lg">
              <motion.img
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-1326x1101.png"
                alt=""
              />
            </div>
          </motion.div>

          <motion.div
            whileHover={{
              y: -15,
              scale: 1.03,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="cardcontainer relative w-1/2 h-[75vh]"
          >
            <div className="card w-full h-full rounded-xl overflow-hidden shadow-lg">
              <motion.img
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png"
                alt=""
              />
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

export default Featured;