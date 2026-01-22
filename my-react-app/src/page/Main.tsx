import Input from '../components/UI/Input/Input'
import Button from '../components/UI/Button/Button'
import Collection from '../components/UI/Collection/Collection'

import type { collection } from '../data'
import { collections } from '../data'

import { useState, useEffect } from 'react'

import styles from './Main.module.css'


function Main() {

    const [tag, setTag] = useState<string>("")
    const [search, setSearch] = useState<string>("")

    const filteredArr:collection[] = collections.filter((item) => {
        const calcTag = tag == "" || item.tag.toLowerCase() == tag.toLowerCase()
        const calcSearch = search == "" || item.label.toLowerCase().includes(search.toLowerCase())

        return calcTag && calcSearch
    })

    useEffect(() => {
        setCurrentPage(1);
    }, [tag, search]);

    const [currentPage, setCurrentPage] = useState<number>(1)
    const itemsPerPage:number = 4

    const totalPages = Math.ceil(filteredArr.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const paginatedArr = filteredArr.slice(startIndex, startIndex + itemsPerPage)

    const buttonsArr = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <div className={styles.Page}>
      
        <div className={styles.Page_buttonContainer}>
            <Button<string> text="Все" value="" setValue={setTag} activeValue={tag} />
            <Button<string> text="Море" value="Море" setValue={setTag} activeValue={tag} />
            <Button<string> text="Горы" value="Горы" setValue={setTag} activeValue={tag} />
            <Button<string> text="Архитектура" value="Архитектура" setValue={setTag} activeValue={tag} />


            <Input value={search} setValue={setSearch}/>
        </div>

        <div className={styles.Page__Map}>

            {paginatedArr.map((e, i) => (
                <Collection key={i} collection={e}/>
            ))}

        </div>

        <div className={styles.Page_buttonContainer}>
          {buttonsArr.map(page => (
            <Button<number>
              key={page}
              text={String(page)}
              value={page}
              setValue={setCurrentPage}
              activeValue={currentPage}
            />
          ))}
        </div>


      

    </div>
  )
}

export default Main
