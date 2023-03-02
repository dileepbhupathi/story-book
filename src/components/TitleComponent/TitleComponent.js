import React from "react";
import './TitleComponent.scss'
import PropTypes from "prop-types";

export const TitleComponent = ({Title,Content,ButtonContext}) => {
  return (
    <div className="title-container">
      <h1 className="title">{Title}</h1>
      <p className="content">
        {Content}
      </p>
      <button className="button" >{ButtonContext}</button>
    </div>
  );
};


TitleComponent.propTypes = {
    Title : PropTypes.string.isRequired,
    Content : PropTypes.string.isRequired,
    ButtonContext : PropTypes.string.isRequired
};

TitleComponent.defaultProps = {
    Title: "Title",
    Content: 'The word Lorem Ipsum is derived from the Latin word which means “pain itself”. It is a kind of a text filler tool that is used by the webmaster on the website.Basically, this tool is used to create dummy content on the website when it’s new.',
    ButtonContext : 'Button'
  };