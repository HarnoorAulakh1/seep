import React, { useState } from "react";
import { MdOutlineModeEditOutline } from "react-icons/md";
const data = [
  {
    title: "Add users",
    description:
      "Invite and add members to this workspace to start communicating.",
    buttons: [
      {
        title: "Add users",
        color: "#085ad2",
      },
    ],
  },
  {
    title: "Create channels",
    description: "Create a public channel that new workspace members can join.",
    buttons: [
      {
        title: "Create channel",
        color: "#353b45",
      },
    ],
  },
  {
    title: "Join rooms",
    description:
      "Discover public channels and teams in the workspace directory.",
    buttons: [
      {
        title: "Open directory",
        color: "#353b45",
      },
    ],
  },
  {
    title: "Mobile apps",
    description: "Take Rocket.Chat with you with mobile applications.",
    buttons: [
      {
        title: "Google Play",
        color: "#353b45",
      },
      {
        title: "App Store",
        color: "#353b45",
      },
    ],
  },
  {
    title: "Desktop apps",
    description: "Install Rocket.Chat on your preferred desktop platform.",
    buttons: [
      {
        title: "Windows",
        color: "#353b45",
      },
      {
        title: "Linux",
        color: "#353b45",
      },
      {
        title: "Mac",
        color: "#353b45",
      },
    ],
  },
  {
    title: "Documentation",
    description: "Learn how to unlock the myriad possibilities of Rocket.Chat.",
    buttons: [
      {
        title: "See documentation",
        color: "#353b45",
      },
    ],
  },
];

function Home() {
  return (
    <div className="h-full w-full text-[#c1c7d0] p-5 font-semibold flex flex-col gap-[2rem]">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-2xl font-semibold">Home</h1>
        <button className="bg-[#353b45] flex flex-row gap-1 justify-center items-center p-2.5 rounded-md">
          <MdOutlineModeEditOutline />
          Customize
        </button>
      </div>
      <h1 className="text-3xl mt-5">Welcome to Atom Space</h1>
      <div className="flex flex-col gap-4">
        <h1 className="text-xl">Some ideas to get you started</h1>
        <div className="flex flex-row flex-wrap gap-4">
          {data.map((item, index) => {
            return (
              <Card
                key={index}
                title={item.title}
                buttons={item.buttons}
                discription={item.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Card({
  title,
  discription,
  buttons,
}: {
  title: string;
  discription: string;
  buttons: { title: string; color: string }[];
}) {
  return (
    <div className="flex flex-col gap-6 bg-[#272931] p-5 rounded-md w-[22rem]">
      <h1>{title}</h1>
      <p className="font-normal text-sm">{discription}</p>
      <div className="flex flex-row gap-2">
        {buttons.map((button, index) => {
          return (
            <button
              key={index}
              className={`bg-[${button.color}] flex flex-row w-max text-[0.8rem] text-white justify-center items-center p-1.5 rounded-md`}
            >
              {button.title}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
