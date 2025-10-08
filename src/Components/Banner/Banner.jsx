import React from "react";
import playstore from '../../assets/playstore.png'
import appstore from '../../assets/appstore.png'
import hero from '../../assets/hero.png'
const Banner = () => {
  return (
    <div className="flex flex-col mx-auto items-center text-center px-2 md:px-0 lg:px-0 xl:px-0">
      <h1 className="text-5xl text-center font-bold">We Build 
        <br />
        <span className="text-[#9F62F2]">Productive </span>Apps</h1>
        <p className="text-[#777] my-5">At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
        <div className="flex gap-5 space-y-5">
            <a href="https://play.google.com/store/apps?hl=en" target="_blank" className="btn "> <img src={playstore} /> Google Play</a>

            <a href="https://www.apple.com/app-store/" target="_blank" className="btn "> <img src={appstore} /> App Store</a>
        </div>
        <div>
            <img src={hero} alt="" />

        </div>
        {/* States Section */}

        <div className="bg-gradient-to-b from-[#632EE3] to-[#9F62F2] opacity-95 w-full py-10 text-white space-y-5">
           <div >
             <h1 className="text-2xl font-bold ">Trusted by Millions, Built for You</h1>
           </div>
            <div className="flex justify-around">
                <div>
                    <p>Total Downloads</p>
                    <h1 className=" text-3xl  md:text-6xl font-bold">29.6M</h1>
                    <p>21% more than last month</p>
                </div>
                <div>
                    <p>Total Reviews</p>
                    <h1 className=" text-3xl  md:text-6xl font-bold">906K</h1>
                    <p>46% more than last month</p>
                </div>
                <div>
                    <p>Active Apps</p>
                    <h1 className=" text-3xl  md:text-6xl font-bold">132+</h1>
                    <p>31 more will Launch</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Banner;
