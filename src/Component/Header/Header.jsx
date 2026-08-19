import { motion } from "motion/react";

const Header = () => {
  return (
    <div>
      <motion.h2
        initial={{ opacity: 0, y: -120 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-[#495050] text-center text-3xl md:text-4xl lg:text-5xl font-bold"
      >
        WELCOME TO IMAGE GALLERY
      </motion.h2>
    </div>
  );
};

export default Header;
