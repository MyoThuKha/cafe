import Head from "next/head";
import Image from "next/image";
import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Col3 from "../components/col3";
import About from "../components/about";

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
  const displayData = useMemo(() => {
    return showList ? data.slice(0, 13) : data.slice(0, 4);
  }, [showList, data]);
  const dynamicHeight = showList ? "h-full" : "h-2/5";
  const handleChange = () => {
    setFull(false);
    setShowList(false);
  };

  return (
    <>
      <Head>
        <title>Cafe</title>
      </Head>
      <div className="grid grid-cols-4 h-screen">
        <div className="col-span-2 bg-white flex items-center pl-6">
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
        {full && <About handleChange={handleChange} curr={curr} />}

        {!full && (
          <div className="col-span-1">
            <AnimatePresence>
              {!showList && (
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
              )}
            </AnimatePresence>
            <div className={dynamicHeight}>
              <div className="">
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
                            setCurr(each);
                          }}
                        >
                          {each.title}
                        </motion.button>
                      </div>
                    );
                  })}
                </div>
                <div className="flex justify-end mr-8">
                  <svg
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
                  </svg>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* col3 */}
        {!full && <Col3 />}
      </div>
    </>
  );
}
