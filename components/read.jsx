import { motion } from "framer-motion";
const ReadArticle = () => {
  return (
    <div className="text-white px-8 flex items-center h-screen">
      <motion.div
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
        className="pt-4"
      >
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
            &copy;medicalnewstoday
          </a>
        </div>
      </motion.div>
    </div>
  );
};
export default ReadArticle;
