import React, { useEffect } from 'react'
import styles from './Flaginfo.module.css'
import { useParams } from 'react-router-dom'
import { API } from '../../Api/Api'

const Flaginfo = ({state, dispatch,}) => {
  const {name}= useParams()
  console.log(name);
  

  useEffect(() => {
      API.getName(dispatch,name)
  },[name])
  return (
    <div className={styles.parent}>
        {
          state.map((country) => {
              return <div className={styles.info}>
                 <img src={country?.flags?.png} className={styles.images}/>
                 <h2 >{country?.name?.common}</h2>
                 <h1 className={styles.h1}>Area-{country?.area}km</h1>
                 <h2 className={styles.h1}>Capital-{country?.capital}</h2>
                 <h2>Population - {country?.population} Milion</h2>
                 <a href={country.maps.googleMaps}>{country.maps.googleMaps}</a>
              </div>
          })
        }

    </div>
  )
}

export default Flaginfo