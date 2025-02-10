import React from "react";
import TaskList from "./TaskList";

export default {
  title: "TaskList",
  component: TaskList,
};

const Template = (args) => <TaskList {...args} />;

export const Default = Template.bind({});
Default.args = {
  tasks: [
    { id: 1, text: "Task 1", completed: false },
    { id: 2, text: "Task 2", completed: true },
  ],
};
