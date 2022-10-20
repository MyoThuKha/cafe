import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://api.sampleapis.com/coffee/hot");
  const data = await res.json();
  return {
    props: { data },
  };
};
export default function Home({ data }) {
  const displayData = data.slice(0, 4);
  return (
    <div className=" grid grid-cols-4">
      <div className="col-span-2 min-h-screen flex items-center">
        <div>
          <h1 className="capitalize text-8xl">The taste of coffee</h1>
          <p className="uppercase">viennese & caffee latte</p>
          <p className="uppercase flip-text">Café au lait</p>
        </div>
      </div>
      <div className="col-span-1 min-h-screen">
        <div className="relative h-3/5">
          <Image
            src="/blue_cup.jpg"
            alt="blue"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="section3 h-2/5 flex justify-center items-center">
          <div className="py-2 w-full text-center text-white">
            {displayData.map((each) => {
              return (
                <div key={each.id} className="py-2 cursor-pointer">
                  <div className="">{each.title}</div>
                </div>
              );
            })}
            <div className="flex mx-8 justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
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
    </div>
  );
}
