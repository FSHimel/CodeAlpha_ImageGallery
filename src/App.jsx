import { IoIosArrowDropdown } from "react-icons/io";
import "./App.css";
import Container from "./Component/Container";
import Header from "./Component/Header/Header";
import { motion } from "motion/react";
import { useState } from "react";

const categories = ["All", "Nature", "Animals", "Travel", "Architecture"];

function App() {
  const [clicked, setClicked] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="pt-5">
      <Container>
        <Header></Header>
        <div className="hidden md:flex gap-4 md:gap-6 bg-[#C9CFCF] w-fit px-8 py-2 rounded-full text-[#111313]">
          {categories.map((category, index) => (
            <div key={category}>
              <motion.button
                onClick={() => setClicked(index)}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ y: -2, x: 2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-3 py-2 cursor-pointer ${
                  clicked === index ? "font-bold text-black" : ""
                }`}
              >
                {category}
              </motion.button>
            </div>
          ))}
        </div>

        {/* only sho when it is smaller device */}
        <div className="dropdown md:hidden">
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
            {categories.map((category, index) => (
              <div key={category}>
                <motion.button
                  onClick={() => setClicked(index)}
                  onClick={() => setSelectedCategory(category)}
                  whileTap={{ scale: 0.95 }}
                  className={`px-1 py-3 ${
                    clicked === index ? "font-bold text-black" : ""
                  }`}
                >
                  {category}
                </motion.button>
              </div>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
}

export default App;
