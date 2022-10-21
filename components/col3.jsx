import { motion } from "framer-motion";
import Image from "next/image";
const Col3 = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ stiffness: 10, duration: 1 }}
      className="col-span-1"
    >
      <div className="relative h-2/5">
        <Image
          src="/white_cup.jpg"
          alt="white"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="relative h-3/5">
        <Image
          src="/yellow_cup.jpg"
          alt="yellow"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
    </motion.div>
  );
};

export default Col3;
