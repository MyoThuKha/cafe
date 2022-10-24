import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Col3 from "../components/col3";
import About from "../components/about";
import BlueImage from "../components/blue";
import ReadArticle from "../components/read";

export const getStaticProps = async () => {
  const res = await fetch("https://api.sampleapis.com/coffee/hot");
  const data = await res.json();
  return {
    props: { data },
  };
};

export default function Home({ data }) {
  const [curr, setCurr] = useState();
  const [showList, setShowList] = useState(false);
  const [full, setFull] = useState(false);
  const [read, setRead] = useState(false);
  const displayData = useMemo(
    () => (showList ? data.slice(0, 13) : data.slice(0, 4)),
    [data, showList]
  );
  const deg = showList ? -90 : 90;
  const handleChange = () => {
    setFull(false);
    setShowList(false);
    setRead(false);
  };

  return (
    <div className="grid grid-cols-2 h-screen overflow-hidden">
      {/* col1 */}
      <div className="col-span-1 bg-white flex items-center pl-6">
        <div className="pt-4">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="capitalize text-7xl"
          >
            The&nbsp;nutrition
            <br /> of coffee
          </motion.h1>
          <p className="uppercase py-4"> viennese & caffee latte</p>
          <button
            className="border border-black px-4 py-2"
            onClick={() => setRead(true)}
          >
            Read More
          </button>
        </div>
        <p className="uppercase flip-text">Café au lait</p>
      </div>
      {/* col2 */}
      <AnimatePresence>
        {!read && (
          <motion.div
            transition={{ duration: 1 }}
            exit={{ x: "100vw" }}
            className="col-span-1"
          >
            <div className="grid grid-cols-2 h-screen overflow-hidden">
              <div className="col-span-1 h-screen relative">
                {/* Blue Image */}
                <AnimatePresence>{!showList && <BlueImage />}</AnimatePresence>
                {full && <About curr={curr} handleChange={handleChange} />}
                {!full && (
                  <div className="py-2 text-center text-white">
                    {displayData.map((each) => {
                      return (
                        <div key={each.id} className="py-2">
                          <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            onClick={() => {
                              setFull(true);
                              setShowList(true);
                              setCurr(each);
                            }}
                          >
                            {each.title}
                          </motion.button>
                        </div>
                      );
                    })}
                  </div>
                )}
                {!full && (
                  <div className="absolute bottom-4 right-4">
                    <motion.svg
                      whileTap={{ rotate: deg }}
                      transition={{ stiffness: 100 }}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-white cursor-pointer"
                      onClick={() => setShowList(!showList)}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={
                          showList
                            ? "M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
                            : "M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        }
                      />
                    </motion.svg>
                  </div>
                )}
              </div>

              <AnimatePresence>{!full && <Col3 />}</AnimatePresence>
            </div>
          </motion.div>
        )}
        {read && <ReadArticle handleChange={handleChange} />}
      </AnimatePresence>
    </div>
  );
}
