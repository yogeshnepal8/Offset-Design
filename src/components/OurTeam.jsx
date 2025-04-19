import React from "react";

function OurTeam({ img, name, designation, role }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex flex-col items-center "
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        whileTap={{ scale: 0.9 }}
        className="flex justify-center items-center"
      >
        <img
          className="w-[200px] lg:h-[400px] lg:w-[320px] h-[250px] rounded-lg hover:shadow-lg hover:shadow-text/40"
          src={`./src/assets/${img}`}
          alt={img}
        />
      </motion.div>
      <h3 className="text-text text-2xl font-bold mt-4">{name}</h3>
      <h3 className="text-text text-normal font-bold mt-4">{designation}</h3>
      <h3 className="text-text text-normal font-bold mt-4">{role}</h3>
    </motion.div>
  );
}

export default OurTeam;
