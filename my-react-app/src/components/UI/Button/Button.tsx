
import type { Dispatch, SetStateAction } from 'react';
import styles from './Button.module.css'

interface ButtonProps {
    text: string;
    setValue: Dispatch<SetStateAction<string>>
}

function Button({text, setValue}:ButtonProps) {

  return (
    <button 
        className={styles.Button}
        onClick={() => setValue(text)}
    >
      {text}
    </button>
  )
}

export default Button
