import React from "react";
import Image from "next/image";
import SadIcon from "public/Images/sad-icon.png";

const NoResults = () => {
  return (
    <div className="w-full text-center">
      <div className="flex justify-center opacity-20 my-10">
        <Image src={SadIcon} alt="sad-icon" width={100} height={100}></Image>
      </div>
      <div className=" p-4 m-5  rounded-md font-bold text-2xl text-pink font-hind">
        No results found!
        <div className=" m-2  rounded-md font-bold text-lg text-gray-400 font-hind opacity-50">
          Sorry, we couldn't find any results
        </div>
      </div>
    </div>
  );
};
export default NoResults;
