import React from 'react'
import './Porto.css'
import Portos from './Portos'

const Porto = () => {
  return (
    <section className='porto section' id='portofolio'>
        <h2 className='section_title'>Portofolio</h2>
        <span className='section_subtitle'>
            Recent Portofolio
        </span>

        <Portos />
    </section>
  )
}

export default Porto