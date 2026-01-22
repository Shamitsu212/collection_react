import Input from '../components/UI/Input/Input'
import Button from '../components/UI/Button/Button'
import Collection from '../components/UI/Collection/Collection'

import type { collection } from '../data'
import { collections } from '../data'

import { useState } from 'react'

import styles from './Main.module.css'


function Main() {

    const [tag, setTag] = useState<string>("")
    const [search, setSearch] = useState<string>("")

    const filteredArr:collection[] = collections.filter((item) => {
        const calcTag = tag == "" || item.tag.toLowerCase() == tag.toLowerCase()
        const calcSearch = search == "" || item.label.toLowerCase().includes(search.toLowerCase())
        
        return calcTag && calcSearch
    })

  return (
    <div className={styles.Page}>
      
      <div>
            <Button text="Море" setValue={setTag}/>
            <Button text="Горы" setValue={setTag}/>
            <Button text="Архитектура" setValue={setTag}/>

            <Input value={search} setValue={setSearch}/>
      </div>

      {filteredArr.map((e, i) => (
        <Collection key={i} collection={e}/>
      ))}

    </div>
  )
}

export default Main
