import React, { InputHTMLAttributes, useState } from 'react';

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  hide?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  hide = false,
  children,
  ...rest
}) => {
  const [show, setShow] = useState(hide);

  return (
    <div className="input-block">
      {label && <label htmlFor={name}>{label}</label>}
      <input type={show ? 'password' : 'text'} id={name} {...rest} />
      {children}
    </div>
  );
};

export default Input;
