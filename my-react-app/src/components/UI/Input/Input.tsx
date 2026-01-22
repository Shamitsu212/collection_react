
import type { Dispatch, SetStateAction } from 'react'

import styles from './Input.module.css'

interface InputProps {
    value: string
    setValue: Dispatch<SetStateAction<string>>
}


function Input({value, setValue}:InputProps) {

  return (
    <input
        className={styles.input}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
    >
    
    </input>
  )
}

export default Input
