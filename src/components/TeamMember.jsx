import React from "react";
import { motion } from "framer-motion";

function TeamMember({ image, name, designation, role }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex flex-col items-center border p-4 border-text/30 rounded-lg w-[300px]"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        whileTap={{ scale: 0.9 }}
        className="flex justify-center items-center"
      >
        <img
          className="w-[200px] lg:h-[200px] lg:w-[200px] object-cover h-[300px] rounded-full hover:shadow-lg hover:shadow-text/40"
          src={image}
          alt={name}
        />
      </motion.div>
      <h3 className="text-text text-2xl font-bold mt-4 text-center">{name}</h3>
      <em className="text-text text-normal font-regular text-center ">
        {designation}
      </em>
      <h3 className="text-text text-normal font-regular text-center">{role}</h3>
    </motion.div>
  );
}

export default TeamMember;
