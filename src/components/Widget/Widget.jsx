import React from 'react';
import "../assets/base.scss";

const Widget = ({ message }) => {
  return <h1 class="lds-widget">{message}</h1>;
};

export default Widget;