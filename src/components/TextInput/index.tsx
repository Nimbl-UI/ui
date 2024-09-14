import React from "react";
import css from "./styles.module.css";

const TextInput: React.FC<Parameters> = ({ children, ...rest }) => {
  return (
    <input className={css.wrapper} {...rest}>
      {children}
    </input>
  );
};

export default TextInput;

interface Parameters {
  children: any;
}
