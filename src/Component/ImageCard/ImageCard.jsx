import { motion } from "motion/react";

function ImageCard({ image, onClick }) {
  return (
    <motion.div
      key={image.id}
      layout
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      exit={{ opacity: 0, scale: 0.9, y: -20 }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
      whileHover={{
        scale: 1.05,
        transition: {
          duration: 0.1,
          ease: "easeOut",
        },
      }}
      onClick={onClick}
      className="shadow-[0_2.8px_2.2px_rgba(0,0,0,0.034),0_6.7px_5.3px_rgba(0,0,0,0.048),0_12.5px_10px_rgba(0,0,0,0.06),0_22.3px_17.9px_rgba(0,0,0,0.072),0_41.8px_33.4px_rgba(0,0,0,0.086),0_100px_80px_rgba(0,0,0,0.12)] rounded-xl cursor-pointer"
    >
      <img
        src={image.image}
        alt={image.title}
        className="w-full h-80 rounded-xl"
      />
      <div className="my-3 flex justify-between items-center px-3">
        <p className="text-black font-bold">{image.title}</p>
        <p className="text-black">
          <span className="font-bold">Category: </span>
          {image.category}
        </p>
      </div>
    </motion.div>
  );
}

export default ImageCard;
