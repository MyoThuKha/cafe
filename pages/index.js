import Head from "next/head";
import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Col3 from "../components/col3";
import About from "../components/about";
import BlueImage from "../components/blue";

export const getStaticProps = async () => {
  const res = await fetch("https://api.sampleapis.com/coffee/hot");
  const data = await res.json();
  return {
    props: { data },
  };
};

export default function Home({ data }) {
  const [showList, setShowList] = useState(false);
  const [full, setFull] = useState(false);
  const [curr, setCurr] = useState();
  const displayData = useMemo(
    () => (showList ? data.slice(0, 13) : data.slice(0, 4)),
    [data, showList]
  );
  const deg = showList ? -90 : 90;
  const handleChange = () => {
    setFull(false);
    setShowList(false);
  };

  return (
    <>
      <Head>
        <title>Cafe</title>
      </Head>
      <div className="grid grid-cols-2 h-screen">
        <div className="col-span-1 bg-white flex items-center pl-6">
          <div>
            <h1 className="capitalize text-7xl">
              The&nbsp;nutrition
              <br /> of coffee
            </h1>
            <p className="uppercase py-4"> viennese & caffee latte</p>
          </div>
          <p className="uppercase flip-text">Café au lait</p>
        </div>
        {/* col2 */}
        <div className="col-span-1">
          <div className="grid grid-cols-2 h-screen overflow-hidden">
            <div className="col-span-1 h-screen">
              <div style={{ height: "90vh" }}>
                <AnimatePresence>{!showList && <BlueImage />}</AnimatePresence>
                {full ? (
                  <About curr={curr} handleChange={handleChange} />
                ) : (
                  <div className="py-2 text-center text-white">
                    {displayData.map((each) => {
                      return (
                        <div key={each.id} className="py-2 cursor-pointer">
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
              </div>
              {!full && (
                <div className="flex justify-end mr-8">
                  <motion.svg
                    whileTap={{ rotate: deg }}
                    transition={{ stiffness: 300 }}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-white"
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
        </div>
      </div>
    </>
  );
}
