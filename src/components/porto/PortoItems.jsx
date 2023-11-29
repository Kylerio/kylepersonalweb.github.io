import React from 'react'
import './Porto.css'

const PortoItems = ({item}) => {
  return (
    <div className='porto_card' key={item.id}>
        <img src={item.image} alt="" className='porto_img'/>
        <h3 className='porto_title'>{item.title}</h3>
        <p className='porto_category'>{item.category}</p>
        <a href={item.path} className='porto_button'>
          Demo <i className='bx bx-right-arrow-alt porto_button-icon'></i>
        </a>
    </div>
  )
}

export default PortoItems