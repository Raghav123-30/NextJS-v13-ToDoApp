"use client";

import React, { useState, useContext, createContext } from "react";

interface Task {
  title: string;
  description: string;
}
interface TaskType {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>; // This should match the type of setTasks
}

const TaskContext = createContext<TaskType | undefined>(undefined);

export function TaskProvider({ children }: { children: React.ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>([
    { title: "Web Development", description: "Revise NextJS 13" },
    {
      title: "Android Development",
      description:
        "Revise Jetpack Compose concepts for building User Interfaces",
    },
  ]);

  return (
    <TaskContext.Provider value={{ tasks: tasks, setTasks: setTasks }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TaskContext);
  if (context == undefined) {
    throw new Error("Context should be used under provider only");
  }
  return context;
}
