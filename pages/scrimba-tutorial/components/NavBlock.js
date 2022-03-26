import React from 'react'
import Image from 'next/image'

export default function NavBlock() {
  return (
    <nav className='scrimba--nav'>
      <Image
        width='30'
        height='30'
        src='/images/react-icon-small.png'
        className='nav--icon'
        alt='react-icon'
      />
      <h4 className='nav--logo_text'>ReactFacts</h4>
      <h5 className='nav--title text-xs'>React Course - Project 1</h5>
    </nav>
  )
}
