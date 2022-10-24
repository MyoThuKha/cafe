import { motion } from "framer-motion";
const ReadArticle = ({ handleChange }) => {
  return (
    <motion.div
      initial={{ y: "-100vh" }}
      animate={{ y: 0 }}
      className="text-white px-8 flex items-center h-screen relative"
    >
      <div className="absolute right-8 top-8">
        <motion.svg
          whileHover={{ scale: 1.1 }}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-white"
          onClick={() => handleChange()}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </motion.svg>
      </div>
      <div className="pt-4">
        <p>Coffee contains a number of useful nutrients, including</p>
        <ul className="py-1">
          <li>riboflavin (vitamin B2)</li>
          <li>niacin (vitamin B#)</li>
          <li>magnesium</li>
          <li>potassium</li>
        </ul>
        Some experts suggest that these and other ingredients
        <br /> in coffee can benefit the human body in various ways
        <div className="py-4">
          <a
            href="https://www.medicalnewstoday.com/articles/270202"
            target={"_blank"}
            rel="noreferrer"
          >
            &copy;medicalnewstoday.com
          </a>
        </div>
      </div>
    </motion.div>
  );
};
export default ReadArticle;
