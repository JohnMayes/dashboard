import React from "react";
import {
  BeakerIcon,
  BellIcon,
  BookOpenIcon,
  ChartPieIcon,
  ChatIcon,
} from "@heroicons/react/solid";

const Sidebar = () => {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-24 m-0 flex flex-col text-white shadow-lg bg-gray-900"
    >
      <SidebarIcon className="px-5" icon={<BellIcon />} />
      <SidebarIcon icon={<BookOpenIcon />} />
      <SidebarIcon icon={<ChartPieIcon />} />
      <SidebarIcon icon={<ChatIcon />} />
      <SidebarIcon icon={<BeakerIcon />} />
    </div>
  );
};

const SidebarIcon = ({ icon }) => {
  return <div className="sidebar-icon">{icon}</div>;
};

export default Sidebar;
