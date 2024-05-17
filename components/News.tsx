import { Info } from "lucide-react";
import React from "react";

const News = () => {
  interface NavItems {
    heading: string;
    subheading: string;
  }
  const newsItem: NavItems[] = [
    {
      heading: "LinkedIn launches new AI-powered job search tools",
      subheading: "2h ago - 1,245 readers",
    },
    {
      heading: "LinkedIn introduces new features for remote work",
      subheading: "6h ago - 875 readers",
    },
    {
      heading: "LinkedIn partners with leading universities for online courses",
      subheading: "10h ago - 532 readers",
    },
    {
      heading: "LinkedIn announces new diversity and inclusion initiatives",
      subheading: "14h ago - 398 readers",
    },
    {
      heading: "LinkedIn unveils new analytics tools for recruiters",
      subheading: "18h ago - 265 readers",
    },
  ];
  return (
    <div className="hidden md:block w-[25%] bg-white h-fit rounded-lg border border-gray-300">
      <div className="flex items-center p-3 justify-between">
        <h1 className="font-medium">Linkedin News</h1>
        <Info size={18} />
      </div>
      <div>
        {newsItem.map((item, index) => {
          return (
            <div
              className="px-3 py-2 hover:bg-gray-200 hover:cursor-pointer"
              key={index}
            >
              <h1 className="text-sm font-medium">{item.heading}</h1>
              <p className="text-xs text-gray-600">{item.subheading}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default News;
