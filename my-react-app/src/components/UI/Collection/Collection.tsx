
import type { collection } from '../../../data'

import styles from './Collection.module.css'

interface CollectionProps {
    collection:collection
}

function Collection({collection}:CollectionProps) {

  return (
    <article className={styles.Collection}>
      
        <div>
            <img src={collection.pic1}/>
        </div>

        <div>
            <img src={collection.pic2}/>
            <img src={collection.pic3}/>
        </div>

        <h2>{collection.label}</h2>
        
        <h3>{collection.tag}</h3>

    </article>
  )
}

export default Collection
