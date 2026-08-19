import { IoIosArrowDropdown } from "react-icons/io";
import "./App.css";
import Container from "./Component/Container";
import Header from "./Component/Header/Header";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import ImageCard from "./Component/ImageCard/ImageCard.jsx";
import { IoChevronBack, IoChevronForward, IoClose } from "react-icons/io5";

const categories = ["All", "Nature", "Animals", "Travel", "Architecture"];

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState(null);

  const filteredImages =
    selectedCategory === "All"
      ? images
      : images.filter((image) => image.category === selectedCategory);

  const handlePrevious = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? filteredImages.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setSelectedIndex((prev) =>
      prev === filteredImages.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <div className="py-5">
      <Container>
        <Header></Header>
        <motion.div
          initial={{ opacity: 0, y: -240 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="hidden md:flex gap-4 md:gap-6 bg-[#C9CFCF] w-fit px-8 py-2 rounded-full text-[#111313]"
        >
          {categories.map((category) => (
            <div key={category}>
              <motion.button
                onClick={() => setSelectedCategory(category)}
                whileHover={{ y: -2, x: 2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-3 py-2 cursor-pointer ${
                  selectedCategory === category ? "font-bold text-black" : ""
                }`}
              >
                {category}
              </motion.button>
            </div>
          ))}
        </motion.div>

        {/* only show when it is smaller device */}
        <motion.div
          initial={{ opacity: 0, y: -240 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="dropdown md:hidden"
        >
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 border-none bg-[#C9CFCF] text-[#111313]"
          >
            Filter <IoIosArrowDropdown />
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-[#C9CFCF] text-[#111313] rounded-box z-1 w-52 p-2 shadow-sm"
          >
            {categories.map((category) => (
              <div key={category}>
                <motion.button
                  onClick={() => setSelectedCategory(category)}
                  whileTap={{ scale: 0.95 }}
                  className={`px-1 py-3 w-full text-start ${
                    selectedCategory === category ? "font-bold text-black" : ""
                  }`}
                >
                  {category}
                </motion.button>
              </div>
            ))}
          </ul>
        </motion.div>

        {/* Cards where the images will be shown */}

        <AnimatePresence mode="popLayout">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-5">
            {filteredImages.map((image, index) => (
              <ImageCard
                key={image.id}
                image={image}
                onClick={() => setSelectedIndex(index)}
              ></ImageCard>
            ))}
          </div>
        </AnimatePresence>

        {/* Lightbox image show */}
        <AnimatePresence>
          {selectedIndex !== null && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-lg p-5"
              // onClick={() => setSelectedIndex(null)}
            >
              {/* Previous */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevious();
                }}
                className="absolute left-5 md:left-10 text-white text-4xl cursor-pointer"
              >
                <IoChevronBack />
              </button>

              {/* Image */}
              <motion.div
                key={filteredImages[selectedIndex].id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.25 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-5xl max-h-[85vh]"
              >
                <img
                  src={filteredImages[selectedIndex].image}
                  alt={filteredImages[selectedIndex].title}
                  className="max-w-full max-h-[85vh] object-contain rounded-xl"
                />
                <div className="my-3 flex justify-between items-center px-3">
                  <p className="text-white font-bold">
                    {filteredImages[selectedIndex].title}
                  </p>
                  <p className="text-white">
                    <span className="font-bold">Category: </span>
                    {filteredImages[selectedIndex].category}
                  </p>
                </div>
              </motion.div>

              {/* Next */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-5 md:right-10 text-white text-4xl cursor-pointer"
              >
                <IoChevronForward />
              </button>

              {/* Close */}
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute top-5 right-5 text-white text-3xl cursor-pointer"
              >
                <IoClose />
              </button>
            </div>
          )}
        </AnimatePresence>
      </Container>
    </div>
  );
}

export default App;
