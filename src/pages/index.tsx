/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-main-bg h-screen">
      <div className="bg-card-bg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 rounded-xl w-[350px]">
        <img src="/images/banner.jpg" alt="banner" className="rounded-lg" />
        <h1 id="title" className="my-4 text-white font-semibold">
          Equilibrium{" "}
          <a className="hover:text-Cyan cursor-pointer text-lg">#3429</a>
        </h1>
        <h3 className="text-soft-blue text-lg font-light">
          Our Equilibrium collection promotes balance and calm.
        </h3>
        <div className="flex justify-between items-center py-5 font-semibold border-dark-blue border-b-2">
          <div className="flex items-center text-Cyan">
            <img src="/images/ethereum.svg" alt="ethereum" className="mr-2" />
            <h3>0.041 ETH</h3>
          </div>
          <div className="flex items-center text-soft-blue">
            <img src="/images/clock.svg" alt="clock" className="mr-2" />
            <h3>3 days left</h3>
          </div>
        </div>
        <div className="flex items-center py-3">
          <img
            src="/images/image-avatar.png"
            alt="avatar"
            className="mr-4 h-8 w-8 rounded-full border-white border-2"
          />
          <h3 className="text-soft-blue">
            Creation of{" "}
            <a className="text-white hover:text-Cyan cursor-pointer">
              Jules Wyvern
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
