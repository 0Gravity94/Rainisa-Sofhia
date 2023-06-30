import React from "react";

function Button({ className, label, onClick }) {
  return (
    <div className={className} onClick={onClick}>
      {label}
    </div>
  );
}

export default Button;
