import Image from "next/image";
import { motion } from "framer-motion";

const containerV = {
  init: {
    opacity: 0,
  },
  animation: {
    opacity: 1,

    transition: {
      delay: 0.5,
      stiffness: 10,
    },
  },
};
const About = ({ curr, handleChange }) => {
  return (
    <motion.div
      variants={containerV}
      initial="init"
      animate="animation"
      transition="transition"
      className="half-width"
    >
      <div className="flex justify-end m-8">
        <motion.svg
          whileHover={{ scale: 1.1 }}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-white"
          onClick={() => {
            handleChange();
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </motion.svg>
      </div>
      <div className="flex justify-center items-center relative h-60 mx-16 my-8">
        <Image
          src={curr.image}
          alt="coffee"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="text-white mx-16">
        <h4 className="text-4xl my-4">{curr.title}</h4>
        <p>{curr.description}</p>
      </div>
    </motion.div>
  );
};

export default About;
