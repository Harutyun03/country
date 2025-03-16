import React from 'react'
import style from './Flag.module.css'
import { NavLink } from 'react-router-dom'

const Flag = ({country}) => {
  return (
    <div className={style.flag}>
        <NavLink to={`/info/${country.name.common}`}>
            <img src={country?.flags?.png} className={style.images}/>
            <h2 className={style.h2flag}>{country?.name?.common}</h2>
            
        </NavLink>

    </div>
  )
}

export default Flag
