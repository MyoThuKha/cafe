import Head from "next/head";
import Image from "next/image";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";

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
  const [curr, setCurr] = useState(0);
  const displayData = useMemo(() => {
    return showList ? data.slice(0, 13) : data.slice(0, 4);
  }, [showList, data]);
  const dynamicHeight = showList ? "h-full" : "h-2/5";
  return (
    <div className="grid grid-cols-4 h-screen">
      <div className="col-span-2 flex items-center">
        <div>
          <h1 className="capitalize text-8xl">The taste of coffee</h1>
          <p className="uppercase">viennese & caffee latte</p>
          <p className="uppercase flip-text">Café au lait</p>
        </div>
      </div>
      {/* col2 */}
      {full && (
        <div className="col-span-2 coffeeBrown">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white"
              onClick={() => {
                setFull(false);
                setShowList(false);
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
      )}

      {!full && (
        <div className="col-span-1">
          {!showList && (
            <div className="relative h-3/5">
              <Image
                src="/blue_cup.jpg"
                alt="blue"
                layout="fill"
                objectFit="cover"
              />
            </div>
          )}
          <div style={{ backgroundColor: "#402b23" }} className={dynamicHeight}>
            <div className="">
              <div className="py-2 text-center text-white">
                {displayData.map((each) => {
                  return (
                    <div key={each.id} className="py-2 cursor-pointer">
                      <button
                        onClick={() => {
                          setFull(true);
                          setCurr(each.id);
                        }}
                      >
                        {each.title}
                      </button>
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
      {!full && (
        <div className="col-span-1">
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
            />
          </div>
        </div>
      )}
    </div>
  );
}
