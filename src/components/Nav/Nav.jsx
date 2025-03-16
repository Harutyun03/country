import React from 'react'
import style from './Nav.module.css'
import { API } from '../../Api/Api'

const reg = ['Europe', 'Africa','Asia', 'Oceania', 'Americas','Antarctic']

const Nav = ({dispatch}) => {
    const filterregion = (region) => {
        API.getRegion(dispatch,region)
    }
  return (
    <nav>
        <div className={style.container}>
            <div className={style.btngroup}>
            <button onClick={() => API.getALL(dispatch)}>All</button>
            {
                reg.map((r) => {
                    return <button onClick={() => filterregion(r)}>{r}</button>
                })
            }
            </div>
        </div>
    </nav>
  )
}

export default Nav