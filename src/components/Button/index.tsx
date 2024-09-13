import React from "react";
import css from "./styles.module.css";

const Button: React.FC<Parameters> = ({ children, ...rest }) => {
  return (
    <button className={css.wrapper} {...rest}>
      {children}
    </button>
  );
};

export default Button;

interface Parameters {
  children: any;
}
