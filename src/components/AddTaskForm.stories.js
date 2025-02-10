import React from "react";
import AddTaskForm from "./AddTaskForm";

export default {
  title: "AddTaskForm",
  component: AddTaskForm,
};

const Template = (args) => <AddTaskForm {...args} />;

export const Default = Template.bind({});
Default.args = {};
