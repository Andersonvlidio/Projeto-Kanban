import React from "react";

const Kanban = ({ children, className }) => {
  return <div className={`row ${className}`}>{children}</div>;
};

export default Kanban;
