import React from 'react'
import './Porto.css'
import { projectsData, projectsNav } from './Data.jsx'
import PortoItems from '../porto/PortoItems.jsx'

const Portos = () => {
  return (
    <div>
      <div className="porto_filters">
        {projectsNav.map((item, index) => {
        return <span className='porto_item' key={index}>{item.name}</span>;
        })}
      </div>

      <div className='porto_container container grid'>
        {projectsData.map((item) => {
          return <PortoItems item={item} key={item.id}/>
        })}
      </div>
    </div>
  )
}

export default Portos