
import type { Dispatch, SetStateAction } from 'react';
import styles from './Button.module.css'

interface ButtonProps<T> {
    text: string;
    value: T;
    setValue: Dispatch<SetStateAction<T>>;
    activeValue: T;
}

function Button<T>({text, value, setValue, activeValue}: ButtonProps<T>) {
  return (
    <button
      className={styles.Button}
      onClick={() => setValue(value)}
      disabled={value === activeValue}
    >
      {text}
    </button>
  )
}

export default Button
