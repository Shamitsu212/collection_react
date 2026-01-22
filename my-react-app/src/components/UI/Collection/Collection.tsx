
import type { collection } from '../../../data'

import styles from './Collection.module.css'

interface CollectionProps {
    collection:collection
}

function Collection({collection}:CollectionProps) {

  return (
    <article className={styles.Collection}>
      
        <div className={styles.Collection__bigWrapper}>
            <img src={collection.pic1} className={styles.pic}/>
        </div>

        <div className={styles.Collection__rowContainer}>
            
            <div className={styles.rowContainer__smallWrapper}>
                <img src={collection.pic2} className={styles.pic}/>
            </div>

            <div className={styles.rowContainer__smallWrapper}>
                <img src={collection.pic3} className={styles.pic}/>
            </div>
            
        </div>

        <h2 className={styles.Collection__label}>
            {collection.label}
        </h2>

        <h3 className={styles.Collection__tag}>
            {collection.tag}
        </h3>

    </article>
  )
}

export default Collection
