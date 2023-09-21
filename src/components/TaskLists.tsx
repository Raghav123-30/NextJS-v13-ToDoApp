"use client";
import React from "react";
import { useTasks } from "@/context/TaskContext";
import TaskItem from "./TaskItem";

const TaskLists = () => {
  const { tasks, setTasks } = useTasks();

  if (tasks.length) {
    return (
      <div className="p-4">
        {tasks.map((item, index) => (
          <TaskItem
            title={item.title}
            index={index}
            description={item.description}
            key={item.title}
          />
        ))}
      </div>
    );
  } else {
    return (
      <p className="flex flex-col justify-center items-center h-[calc(100vh-6rem)] text-3xl text-slate-900">
        No tasks added!
      </p>
    );
  }
};

export default TaskLists;
