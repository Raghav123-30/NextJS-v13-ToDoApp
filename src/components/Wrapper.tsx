"use client";
import { TaskProvider } from "@/context/TaskContext";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <TaskProvider>{children}</TaskProvider>;
};

export default Wrapper;
