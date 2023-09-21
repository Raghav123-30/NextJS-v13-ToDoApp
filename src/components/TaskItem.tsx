"use client";
import { useRouter } from "next/navigation";

import Link from "next/link";
import React from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { useTasks } from "@/context/TaskContext";

interface Task {
  title: string;
  description: string;
  index: number;
}

const TaskItem = ({ title, description, index }: Task) => {
  const router = useRouter();

  const { setTasks } = useTasks();
  const handleDelete = () => {
    setTasks((items) => items.filter((item, position) => position != index));

    router.refresh();
  };
  return (
    <div className="border-slate-900 px-4 py-6 flex justify-between items-start max-w-3xl my-4 border-2 mx-auto rounded-md hover:scale-110">
      <div>
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-base">{description}</p>
      </div>
      <div className="flex flex-row gap-2">
        <Link href={`/edit_topic/${index}`}>
          <AiFillEdit size={24} />
        </Link>
        <button onClick={handleDelete}>
          <AiFillDelete size={24} />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
