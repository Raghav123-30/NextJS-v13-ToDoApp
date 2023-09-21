"use client";
import { useTasks } from "@/context/TaskContext";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const AddTopicForm = () => {
  const router = useRouter();
  const { tasks, setTasks } = useTasks();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Please give valid fields");
    } else {
      setTasks((prev) => {
        return [...prev, { title: title, description: description }];
      });
      setTitle("");
      setDescription("");
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
        Add Task
      </button>
    </form>
  );
};

export default AddTopicForm;
