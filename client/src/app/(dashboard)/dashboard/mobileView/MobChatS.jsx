"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineSearch } from "react-icons/ai";
import { BsCameraVideo } from "react-icons/bs";
import { IoIosPower } from "react-icons/io";
import { signOut } from "firebase/auth";

import userPng from "../../../../../public/images/userPng.png";
import { auth } from "../../../../libs/firebase";
import { GlobalContext } from "../../../../Context/store";
import { ChatContext } from "../../../../Context/ChatContext";
import Messages from "../components/Messages";
import ChatBox from "../components/ChatBox";
import MobileTab from "./MobileTab";

export default function MobChatS() {
  const { data } = useContext(ChatContext);
  const { currentUser } = useContext(GlobalContext);
  return (
    <div>
      <div className="a rounded-lg flex p-1 items-center fixed glass-bg-2">
        <div className=" h-full flex justify-center items-center px-3">
          <div className="py-1 h-full normal-case flex items-center">
            <div className=" px-2 ">
              <div className="absolute h-full  top-0 left-0">
                <MobileTab />
              </div>
            </div>
            <div className="a flex items-center py-2 px-6">
              <div className="b text-3xl border-2 h-full rounded-full overflow-hidden">
                <Image
                  src={data.user?.photoURL || userPng}
                  alt="bg-hover"
                  blurDataURL="data:..."
                  automatically={"true"}
                  provided={"true"}
                  placeholder="blur"
                  className="a "
                  width={40}
                  height={40}
                />
              </div>
              <div className="text-xs px-2 text-left font-medium">
                <div className="c">
                  <h1>{data.user?.displayName || "User"}</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end text-2xl px-2">
            <a className="e px-4 btn btn-ghost">
              <BsCameraVideo />
            </a>
            <a className="e px-4 btn btn-ghost">
              <IoCallOutline />
            </a>
            <a className="e px-4 btn btn-ghost">
              <AiOutlineSearch />
            </a>
            <a className="divider divider-horizontal p-0 m-0"></a>
            <a onClick={() => signOut(auth)} className="px-4 btn btn-ghost">
              <IoIosPower />
            </a>
          </div>
        </div>
      </div>
      <div className="divider m-0 py-0 px-6 h-0"></div>
      <div className=" ">
        <div className="">
          <Messages />
        </div>
        <div className="a absolute bottom-0 p-2 w-full glass-bg-2">
          <ChatBox />
        </div>
      </div>
    </div>
  );
}
