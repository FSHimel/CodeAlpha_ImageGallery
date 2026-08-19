import { motion } from "motion/react";

const Header = () => {
  return (
    <div>
      <motion.h2
        initial={{ opacity: 0, y: -120 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-[#495050] text-center text-4xl md:text-5xl lg:text-6xl font-bold"
      >
        This is art gallery
      </motion.h2>
    </div>
  );
};

export default Header;
