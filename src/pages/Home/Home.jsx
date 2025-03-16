import React from 'react'
import Flag from '../../components/Flag/Flag';
import style from './Home.module.css'

const Home = ({state}) => {
  console.log(state);
  
  return (
    <section className={style.container}>
      <div className={style.home}>
      {
        state.countries.map((country) => {
          return  <Flag country={country} key={country.name.common}/>

                  
        })
      }
      </div>
    </section>
  )
}

export default Home