import {
  Bell,
  BriefcaseBusiness,
  Home,
  MessageCircleMore,
  Users,
} from "lucide-react";
import Link from "next/link";
import React from "react";

type navitems = {
  text: string;
  src: string;
  icon: JSX.Element;
};

const NavItems: navitems[] = [
  {
    text: "Home",
    src: "/home",
    icon: <Home />,
  },
  {
    text: "My Network",
    src: "/networks",
    icon: <Users />,
  },
  {
    text: "Jobs",
    src: "/job",
    icon: <BriefcaseBusiness />,
  },
  {
    text: "Messaging",
    src: "/message",
    icon: <MessageCircleMore />,
  },
  {
    text: "Notification",
    src: "/notification",
    icon: <Bell />,
  },
];

const Navitems = () => {
  return (
    <div className="flex gap-8">
      {NavItems.map((item, index) => {
        return (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer text-[#666666] hover:text-black"
          >
            <span>{item.icon}</span>
            <Link href={item.src}>{item.text}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Navitems;
