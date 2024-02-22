import React, { FC } from "react";
import Image from "next/image";
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";

const FeedCard: FC = () => {
  return (
    <div className="border border-gray-700 border-x-0 border-b-0 p-4 hover:bg-slate-900 transition-all cursor-pointer">
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-1 ">
          <Image
            alt="Profile Picture"
            src="https://avatars.githubusercontent.com/u/91377615?v=4"
            width={50}
            height={50}
          />
        </div>
        <div className="col-span-11">
          <h5>Prathik</h5>
          <p>
            Hey guys, welcome to my youtube channel. Please like share subscribe
            and press the bell icon for further updates in this channel.
          </p>
          <div className="flex justify-between mt-3 text-xl p-2 w-[85%]">
            <div>
              <BiMessageRounded />
            </div>
            <div>
              <FaRetweet />
            </div>
            <div>
              <AiOutlineHeart />
            </div>
            <div>
              <BiUpload />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
