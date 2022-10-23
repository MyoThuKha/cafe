import { motion } from "framer-motion";
import Image from "next/image";
const BlueImage = () => {
  return (
    <motion.div
      initial={{ y: "-100vh" }}
      animate={{ y: "0" }}
      exit={{ y: "-100vh" }}
      transition={{
        stiffness: 80,
      }}
      className="relative h-3/5"
    >
      <Image
        src="/blue_cup.jpg"
        alt="blue"
        layout="fill"
        objectFit="cover"
        priority
      />
    </motion.div>
  );
};

export default BlueImage;
