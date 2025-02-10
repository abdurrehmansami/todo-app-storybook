import React from "react";
import Task from "./Task";

export default {
  title: "Task",
  component: Task,
};

const Template = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: { id: 1, text: "Sample Task", completed: false },
};

export const Completed = Template.bind({});
Completed.args = {
  task: { id: 2, text: "Completed Task", completed: true },
};
