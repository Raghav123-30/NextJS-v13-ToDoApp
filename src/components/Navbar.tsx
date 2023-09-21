import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="h-13 border-b-2 border-slate-900 flex flex-row justify-between items-center text-slate-900 px-4 py-6 ">
      <Link className="font-bold capitalize text-xl" href={"/"}>
        All tasks
      </Link>
      <Link
        href={"/add_topic"}
        className="bg-slate-600 hover:bg-slate-700 rounded-md px-4 py-2 text-white"
      >
        Add Task
      </Link>
    </nav>
  );
};

export default Navbar;
