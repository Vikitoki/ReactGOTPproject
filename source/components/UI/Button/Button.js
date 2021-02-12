import React from "react";

import "./Button.scss";

const Button = ({ typeBtn, view, label, onClick }) => {
  let cls = "btn";
  const type = typeBtn || "button";

  if (view) {
    cls += ` btn_${view}`;
  }

  return (
    <button onClick={onClick} className={cls} type={type}>
      {label}
    </button>
  );
};

export default Button;
