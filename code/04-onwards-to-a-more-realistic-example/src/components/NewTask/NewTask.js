import React from "react";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";
import useHttp from "../hooks/use-http";

const NewTask = (props) => {
  const httpData = useHttp();

  const { isLoading, error, sendRequest: sendTaskRequest } = httpData;

  const createTask = (taskText, taskData) => {
    const generatedId = taskData.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };
    props.onAddTask(createdTask);
  };

  const enterTaskHandler = async (taskText) => {
    sendTaskRequest(
      {
        url:
          "https://react-custom-hook-e1dad-default-rtdb.europe-west1.firebasedatabase.app/tasks.json",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: { text: taskText },
      },
      createTask.bind(null, taskText) // pre-configure
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
