import React, { useEffect } from 'react'
import style from './Nav.module.css'
import { API } from '../../Api/Api'
import { useState } from 'react'
import { getTextAC } from '../../store/store'
import { NavLink } from 'react-router-dom'

const reg = ['Europe', 'Africa','Asia', 'Oceania', 'Americas','Antarctic']

const Nav = ({dispatch,text,search}) => {
    const [open,setOpen]=useState(false)

  useEffect(() => {
    if(text.length > 2){
        API.getSearch(dispatch,text)
        setOpen(true)
    }else{
        setOpen(false)
    }
  },[text])


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
                <div className={style.search}>
                    <input className={style.input} type='search' value={text} onChange={(e) => dispatch(getTextAC(e.target.value))}/>
                    {
                        open && <div className={style.navsearch}>
                            {
                                search.map((s) => {
                                    return <NavLink to={`/info/${s.name.common}`} onClick={() => {setOpen(false)}}>
                                        {
                                            <div className={style.lists}>
                                                <li>{s?.name?.common}</li>
                                                <img src={s.flags.png} className={style.imag}/>
                                            </div>
                                        }
                                        
                                        </NavLink>
                                })
                            }
                        </div>
                    }
                </div>
            </div>
            
            
        </div>
    </nav>
  )
}

export default Nav