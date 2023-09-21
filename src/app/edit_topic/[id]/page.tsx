"use client";

import React from "react";
import { useParams } from "next/navigation";
import EditTopicForm from "@/components/EditTopicForm";

const SingleEditPage = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <EditTopicForm position={Number(id)} />
    </div>
  );
};

export default SingleEditPage;
