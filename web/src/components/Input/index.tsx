import React, { InputHTMLAttributes, useState, FormEvent } from 'react';
import { IconBaseProps } from 'react-icons';

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  icon?: React.ComponentType<IconBaseProps>;
  alternativeIcon?: React.ComponentType<IconBaseProps>;
  hide?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  icon: MainIcon,
  alternativeIcon: AlternativeIcon,
  hide = false,
  ...rest
}) => {
  const [show, setShow] = useState(hide);

  function handleToggleVisible(e: FormEvent) {
    e.preventDefault();
    setShow(!show);
  }

  return (
    <div className="input-block">
      {label && <label htmlFor={name}>{label}</label>}
      <div className="input">
        <input type={show ? 'password' : 'text'} id={name} {...rest} />
        {MainIcon && AlternativeIcon && (
          <button onClick={handleToggleVisible}>
            {show ? <MainIcon size={20} /> : <AlternativeIcon size={20} />}
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
