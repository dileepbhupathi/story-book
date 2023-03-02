import React from "react";
import { TitleComponent } from "../components/TitleComponent/TitleComponent";

export default {
  title: "Title Component",
  component: TitleComponent,
};

 const Title = (args) => <TitleComponent {...args} />;

export const HeaderComponet = Title.bind({});

Title.args = {
  Title: "Title",
  Content:
    "The word Lorem Ipsum is derived from the Latin word which means “pain itself”. It is a kind of a text filler tool that is used by the webmaster on the website.Basically, this tool is used to create dummy content on the website when it’s new.",
    ButtonContext : 'Button'
};
