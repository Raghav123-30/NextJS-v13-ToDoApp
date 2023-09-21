"use client";
import { FormEvent, useState } from "react";
import { useTasks } from "@/context/TaskContext";
import { useRouter } from "next/navigation";
const EditTopicForm = ({ position }: { position: number }) => {
  const router = useRouter();
  const { tasks, setTasks } = useTasks();
  const itemToBeEdited = tasks[position];

  const [title, setTitle] = useState(itemToBeEdited.title);
  const [description, setDescription] = useState(itemToBeEdited.description);
  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Fields cannot be empty");
    } else {
      itemToBeEdited.title = title;
      itemToBeEdited.description = description;
      router.push("/");
    }
  };
  return (
    <form className="flex flex-col gap-4 px-12 max-w-3xl mx-auto mt-24">
      <input
        className="border-2 border-slate-900 px-8 py-3"
        placeholder="Enter task name....."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <input
        className="border-2 border-slate-900 px-8 py-3  "
        placeholder="Enter task description....."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>

      <button
        className="bg-slate-600 hover:bg-slate-800 px-4 py-2 text-white w-fit "
        onClick={submitHandler}
        type="submit"
      >
        Update Task
      </button>
    </form>
  );
};

export default EditTopicForm;
